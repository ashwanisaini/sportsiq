ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
    'plugins.box2d.entity',
    'game.levels.Scene',
    'game.entities.Scenes',
    'game.entities.Player1',
    'game.entities.PlayerRoles',
    'game.entities.SetFormationPosition',
    'game.entities.CurrectAnswerRotationPopUp1',
    'game.entities.textForCorrectAnswer',
    'game.entities.AssetsLoader',
    'game.entities.textForWrongAnswer',
    'game.entities.textForTimeUp',
    'plugins.scale',
    'plugins.tween',
    // 'impact.debug.debug',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	font: new ig.Font( 'media/fonts/04b03.font.png' ),
    font_s_37: new ig.Font('media/fonts/font_3.png'),
	changeScene:false,                                             //bool for scene change
    displaytimer:0,                                                //timer in top scene
	nextScene:"",                                                  //hold image of next scene
    currentQuestionNumber:1,                                       //current question in scene
    totalNumberOfQuestionInCurrentScene:0,                         //total question in current scene
    totalNumberOfScene:0,                                          //total number of scene
    sceneCounter : 0,                                              //counter for scene
    fromationType:"",                                              //player collision
    timerNeedToShow: false,                                        //bool for timer is need to show or not
    answerToApi:[],                                                //array of answer send to api
    playPauseGame:true,                                            //play pause game
    currentSceneType:"",                                           //current Scene In education or testing
    playerCanAnswer:true,                                          //bool for if player can answer or not(wait f)
    timerUpdate:true,
	
	init: function()
        {
            var gravity = new Box2D.Common.Math.b2Vec2( 0, 60 );      // gravity for tween currect animation
            ig.world = new Box2D.Dynamics.b2World( gravity, true );
            ig.input.bind(ig.KEY.MOUSE1,"click");
            ig.game.spawnEntity( EntityAssetsLoader, - 1000, - 500 );
            this.loadLevel(LevelScene);
            ig.game.spawnEntity( EntityPlayerRoles, 5000, 0 );
            ig.game.fromationType = globals.dataFromAPI.type;
            ig.game.spawnEntity( EntityScenes, 0, 0 );
            ig.game.gameStart();
            //this.formationHandelar = ig.game.spawnEntity(EntitySetFormationPosition, 1100, 6060 );
            //ig.game.formationHandelar.setFormation(globals.dataFromAPI[ig.game.currentFormationNumber].formation,globals.dataFromAPI[ig.game.currentFormationNumber].type);
           // globals.todayDate = new Date();
          //  console.log("Todays date----"+globals.todayDate);

        },

    //----start game time and load first scene
    gameStart: function()
        {
            this.timerInterval = setInterval( function ()
                {
                    if(ig.game.timerUpdate === true)
                    ig.game.displaytimer++;
                }, 1000 );
            ig.game.totalNumberOfScene = globals.scenes.length;
            ig.game.timerFunction();
            ig.game.sceneChanger();
        },

    //----function for next scene
    sceneChanger: function ()
        {
            $(".bottom-nav-panal ul li a").removeClass('focusbox');
            if( ig.game.totalNumberOfScene -1 <ig.game.sceneCounter)
                {
                    // alert("last scen fron main module");;
                    ig.game.timerNeedToShow =false;
                    openPopup('modal6');
                    return;
                }
            this.testingOrEducationScene();
            ig.game.nextScene =  globals.scenes[ig.game.sceneCounter];
            ig.game.sceneCounter += 1;
            ig.game.changeScene = true;
        },

    //----function for check that scene is testing or education
    testingOrEducationScene: function()
        {
            if(globals.dataFromAPI[0].scenes[ig.game.sceneCounter].typeOfScene ==="Education")
                {
                    //----condition if scene is education then show buttons
                    ig.game.currentSceneType = "Education";
                    $("#timer").text("");
                    $("#questionCounter").text("");
                    ig.game.timerNeedToShow = false;
                    $('.bottom-nav-panal').show();
                    $("#questionAnswers").hide();

                    thisIsCurrentEducationScene(globals.dataFromAPI[0].scenes[ig.game.sceneCounter].id);
                    for(var k= 1; k<= globals.dataFromAPI[0].scenes[ig.game.sceneCounter].players.length; k++)
                        {
                            $(' #t'+k).text(globals.dataFromAPI[0].scenes[ig.game.sceneCounter].players[k-1].symbol);
                        }
                    for(var l= globals.dataFromAPI[0].scenes[ig.game.sceneCounter].players.length+1; l<= 11; l++)
                        {
                            $("#p"+l).hide();
                        }
                    globals.lastEducationSceneId = globals.dataFromAPI[0].scenes[ig.game.sceneCounter].id;
                }
            else
             {
                    //----if scene is testing then show question and answer
                    ig.game.currentSceneType = "Testing";
                    ig.game.displaytimer="";
                    $('.bottom-nav-panal').hide();
                    $("#questionAnswers").show();
                    ig.game.totalNumberOfQuestionInCurrentScene = globals.dataFromAPI[0].scenes[  ig.game.sceneCounter ].questions.length;
                    var realQus= globals.dataFromAPI[0].scenes[  ig.game.sceneCounter ].questions;
                    globals.filterQus = realQus.slice();
                    console.log(realQus);
                    for ( var i =  0; i< globals.filterQus.length;i++)
                    {
                        if( globals.filterQus[i].status === 2)
                        {
                            globals.filterQus.splice(i,1);
                            i--;
                            ig.game.totalNumberOfQuestionInCurrentScene--;
                        }
                    }
                    console.log(globals.filterQus);
                    this.setQuestionAndAnswer();
                    ig.game.timerNeedToShow= true;
                    thisIsCurrentTestingScene();
                    thisIsCurrentQuestionInScene(globals.filterQus[0].id);
                }

            if(globals.dataFromAPI[0].scenes[ig.game.sceneCounter].instruction)
                {
                    this.setUpHowToPlayPopUp();
                    ig.game.timerUpdate = false;
                    ig.game.displaytimer = 0;
                }
            else
                {
                if (globals.dataFromAPI[0].scenes[ig.game.sceneCounter].legends)
                    {
                        this.showLegends();
                        ig.game.timerUpdate = false;
                        ig.game.displaytimer = 0;
                    }
                }
            $("#sceneName").text(globals.dataFromAPI[0].scenes[ig.game.sceneCounter].name);
        },

    //----instruction points show+
    setUpHowToPlayPopUp: function()
        {
            var howToPlayString = globals.dataFromAPI[0].scenes[ig.game.sceneCounter].instruction;
            var res = howToPlayString.split(";");
            for (var i = 0; i < res.length; i++)
                {
                    $("#howToPlay").append($("<li>").text(res[i]));
                }
            document.getElementById("instructionHeading").innerText = globals.dataFromAPI[0].scenes[ig.game.sceneCounter].instructionHeading ;
            openPopup('modal1','1000');
        },

    //--show first question of testing
    setQuestionAndAnswer: function()
        {
            document.getElementById("question").innerText =  globals.filterQus[0].title;
            for (var i=1;i<= 6; i++)
                {
                    document.getElementById("ans"+i).innerText =  globals.filterQus[0].answers[i-1].title;
                }
        },

    testForQuestionAndAndAnswr : function ()
        {
            console.log("this is for set test for question ");
            for( var i = 0;i<= 6; i++)
            {
                document.getElementsById("ans"+i).innerText = globals.filterQus[0].answer[i-1].title;
            }
        },

    //---show the legends image and fade out after some tinme
    showLegends: function()
        {
            document.getElementById("legendImg").src = globals.dataFromAPI[0].scenes[ig.game.sceneCounter].legends;
            openPopup('modal5');
            setTimeout( function ()
            {
                ig.game.displaytimer = 0;
                closePopup();
                ig.game.timerUpdate = true;
            },  globals.dataFromAPI[0].scenes[ig.game.sceneCounter].legendsTime*1000);
        },

    update: function()
        {
            ig.world.Step( ig.system.tick, 6, 6 );
            this.parent();
            
        },

   // --draw time and question counter
	draw: function()
        {
            this.parent();
                if(ig.game.timerNeedToShow === true) {
                    $("#timer").text(ig.game.displaytimer);
                    $("#questionCounter").text(ig.game.currentQuestionNumber + "/" + ig.game.totalNumberOfQuestionInCurrentScene);
                }

        },
    timerFunction:function(){
        setInterval( function ()
        {
      //      console.log("in side   new update tfunction ------");
            if(ig.game.displaytimer === 31 && ig.game.currentSceneType === "Testing") {
                ig.game.spawnEntity(EntitytextForTimeUp, 120, 65);
                ig.game.displaytimer = 0;
                whenQuestionAattempted(globals.filterQus[ig.game.currentQuestionNumber - 1].id);
                nextQuestion();
            }
        }, 60 );
    }

});

    ig.main( '#canvas', MyGame, 60, 788, 461, 1 );
    maintainAspect();
    window.addEventListener( 'resize', function()
        {
            maintainAspect();
        });

     //myend 22
    // function maintainAspect(  )
    //     {
    //         // var canvas = document.getElementById('canvas');
    //         // if(window.innerWidth   * 788 / 461<=window.innerHeight) {
    //         //     var a = window.innerWidth / 1.71;
    //         //     var h = window.innerWidth / 1.71;
    //         //     canvas.style.width = window.innerWidth + 'px';
    //         //     canvas.style.higth = h / +'px';
    //         // }
    //         //  if(window.innerWidth>window.innerHeight)  {
    //         //      // var a = window.innerWidth / 1.71;
    //         //      // var h = window.innerWidth / 1.71;
    //         //      // var canvas = document.getElementById('canvas');
    //         //      // canvas.style.width = window.innerWidth + 'px';
    //         //      // canvas.style.higth = h / +'px';
    //         //      //   var h = (window.innerHeight / 0.9)*0.7;
    //         //      // canvas.style.width = h + 'px';
    //         //
    //         //      var newH = window.innerWidth;
    //         //      canvas.style.higth = newH / +'px';
    //         //      canvas.style.width = window.innerWidth/2 + 'px';
    //         //      console.log("----------------------- neww");
    //         // }
    //     }

    //Server 21
    function maintainAspect(  )
    {
        if(window.innerWidth<=window.innerHeight) {
            var a = window.innerWidth / 1.71;
            var h = window.innerWidth / 1.71;
            var canvas = document.getElementById('canvas');
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.higth = h / +'px';
        }
      //  if(window.innerWidth>window.innerHeight)  {
     else  {
            var a = window.innerWidth / 0.9;
            var canvas = document.getElementById('canvas');
            canvas.style.higth = a / +'px';
        //    canvas.style.width = window.innerWidth/(window.innerWidth/window.innerHeight)+'px';
           // console.log("running");
            //   canvas.style.width = window.innerWidth / 2 / +'px';
        }
    }

    // window.addEventListener( 'resize', function() {
    //
    //     // var a = window.innerWidth/1.71;
    //     // var h = window.innerWidth/1.71;
    //     // var canvas = document.getElementById( 'canvas' );
    //     // canvas.style.width =  window.innerWidth + 'px';
    //     // canvas.style.higth =  h/+ 'px';
    //
    // } );

    window.onbeforeunload = function() {
      alert("your data will unsaved");
    }

    window.onbeforeunload = reload();

    function  reload() {
       // alert("are you sure to reload page");
    }

    $("#prospects_form").submit(function(e) {
        e.preventDefault();
    });

    /*document.addEventListener( "visibilitychange", function()
    {
        if ( document.hidden ){
           ig.game.timerUpdate = false;
        }
        else {
            ig.game.timerUpdate = true;
        }
    });*/

});




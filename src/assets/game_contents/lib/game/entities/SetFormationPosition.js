ig.module(
    'game.entities.SetFormationPosition'
)
    .requires(
        'impact.entity'

    )
    .defines( function() {

        EntitySetFormationPosition = ig.Entity.extend({
            size: {x: 30, y: 30},
            type: ig.Entity.TYPE.A,
            animSheet: new ig.AnimationSheet('media/player.png', 30, 30),

            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );
                this.currentAnim.alpha = 1;

            },
            selectFormation: function(formation,type){
                if(globals.dataFromAPI[0].name ==="Module 1") {
                    if (ig.game.fromationType == "7v7") {
                        console.log("in new function -------");
                        switch (formation) {
                            case "1:2:3:1":
                                formationCollider = [
                                    {x: 378, y: 100},
                                    {x: 280, y: 190},
                                    {x: 468, y: 190},
                                    {x: 180, y: 332},   //RB  RB wing man
                                    {x: 430, y: 260},     //LB left back wing man
                                    {x: 330, y: 384},
                                    {x: 573, y: 330}
                                ];
                                break;

                            case "1:3:2:1":
                                formationCollider = [
                                    {x: 378, y: 100},
                                    {x: 378, y: 190},
                                    {x: 185, y: 210},
                                    {x: 570, y: 210},   //RB  RB wing man
                                    {x: 315, y: 255},     //LB left back wing man
                                    {x: 475, y: 310},
                                    {x: 330, y: 380}
                                ];
                                break;
                        }
                    }

                   else  if (ig.game.fromationType == "9v9") {
                        console.log("in new function -------");
                        switch (formation) {
                            case "1:3:2:3":                 //Scene 7,8,9
                                formationCollider = [
                                    {x: 378, y: 100},       //1
                                    {x: 230, y: 190},       //2
                                    {x: 520, y: 190},       //3
                                    {x: 400, y: 180},        //4
                                    {x: 340, y: 235},        //6
                                    {x: 145, y: 310},         //7
                                    {x: 450, y: 290},         //8
                                    {x: 330, y: 364},
                                    {x: 600+5, y: 330-5},          //11
                                ];
                                break;

                            case "1:3:3:2":
                                formationCollider = [
                                    {x: 378, y: 130},         //1
                                    {x: 230+5, y: 190},       //2
                                    {x: 520-5, y: 190},       //3
                                    {x: 400-30, y: 180},      //4
                                    {x: 180, y: 285},         //7
                                    {x: 380, y: 255},         //8
                                    {x: 300+30, y: 290+40},   //10
                                    {x: 500+70, y: 280},           //11
                                    {x: 430, y: 360}           //9
                                ];
                                break;
                        }
                    }

                    else  if (ig.game.fromationType == "11v11") {
                        console.log("in new function -------");
                        switch (formation) {
                            case "1:4:4:2":
                                formationCollider = [
                                    {x: 380, y: 10},       //1
                                    {x: 220, y: 60},       //2
                                    {x: 540, y: 60},       //3
                                    {x: 320, y: 50},        //4
                                    {x: 440, y: 50},        //5
                                    {x: 380, y: 100},       //6
                                    {x: 290, y: 130},       //7
                                    {x: 470, y: 130},       //8
                                    {x: 333, y:268},        //9
                                    {x: 380, y: 180},       //10
                                    {x: 500, y: 220},          //11
                                ];
                                break;

                            case "1:4:3:3":
                                formationCollider = [
                                    {x: 370, y: 10},        //1
                                    {x: 210, y: 70},        //2
                                    {x: 540, y: 70},        //3
                                    {x: 317, y: 45},        //4
                                    {x: 430, y: 45},        //5
                                    {x: 370, y: 90},        //6
                                    {x: 180, y: 215},       //7
                                    {x: 280, y: 150},       //8
                                    {x: 380+3, y:240},      //9
                                    {x: 430, y: 170},       //10
                                    {x: 595, y: 210},          //11
                                ];
                                break;

                            case "4:2:1:3":
                                formationCollider = [
                                    {x: 370, y: 10},        //1
                                    {x: 210, y: 70},        //2
                                    {x: 540, y: 70},        //3
                                    {x: 317, y: 45},        //4
                                    {x: 430, y: 45},        //5
                                    {x: 370, y: 90},        //6
                                    {x: 180, y: 215},       //7
                                    {x: 280, y: 150},       //8
                                    {x: 380+3, y:240},      //9
                                    {x: 430, y: 170},       //10
                                    {x: 595, y: 210},          //11
                                ];
                                break;
                        }
                    }
                }
            },

            setFormation: function ( formation,type) {
                this.selectFormation(formation,type);
                for(var i=0;i <= globals.dataFromAPI[ig.game.currentFormationNumber].players.length-1;i++)
                {
                 //   var nameOfEntityToSpawn ="Entity"+globals.dataFromAPI[0].players[0].name;
                    ig.game.spawnEntity(EntityPlayer1,formationCollider[i].x,formationCollider[i].y,{ name: globals.dataFromAPI[ig.game.currentFormationNumber].players[i].name });
                }
            },

            deletePlayerColliders: function(){

                for(var i = 0; i<globals.dataFromAPI[0].players.length; i++) {
                    var playerToRemove = ig.game.getEntitiesByType(EntityPlayer1)[0];
                    playerToRemove.kill();
                }
            },

        } );

    } );
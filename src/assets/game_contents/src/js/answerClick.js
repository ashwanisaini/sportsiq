   // ---this function callled when player click answer
    function clickOnAnswer(answer) {
            if(ig.game.playerCanAnswer) {
                ig.game.playerCanAnswer =false;
                whenQuestionAattempted( globals.filterQus[ig.game.currentQuestionNumber - 1].id,answer);
                checkForCorrectAswer(answer);
                setTimeout(function () {
                    ig.game.displaytimer = 0;
                    ig.game.playerCanAnswer =true;
                    nextQuestion();
                }, 1700);
            }
        }

    function AnswerDataSave(answer)
    {
         answerDetail =
             {
                 QuestionId: globals.filterQus[ig.game.currentQuestionNumber-1].id,
                 answerId: answer,
                 time: ig.game.displaytimer
            };
         ig.game.answerToApi.push(answerDetail);


          console.log("-----------answer give to server ---------------------");
          console.log(answerDetail);
         // console.log("======total answer to server=========");
         // console.log(  ig.game.answerToApi);
     }

    //---function for check question is last or need to show nest scene
    function nextQuestion() {
            if(ig.game.currentQuestionNumber < ig.game.totalNumberOfQuestionInCurrentScene )
                {
                    setNextQuestionAndAnswer();
                    thisIsCurrentQuestionInScene(globals.filterQus[ig.game.currentQuestionNumber-1].id);
                }
            else
                {
                    if( ig.game.totalNumberOfScene -1 <ig.game.sceneCounter)
                    {
                        //alert("new alest after question");

                        whenCurrentTestingSceneMarkedDone();
                        ig.game.timerNeedToShow = false;
                        openPopup('modal6');
                        return;

                    }
                    whenCurrentTestingSceneMarkedDone();
                    ig.game.currentQuestionNumber =1;
                    ig.game.sceneChanger();
                }
    }

    //---test for answer is correct or not
    function checkForCorrectAswer(answer){

       if(globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].questions[ig.game.currentQuestionNumber-1].correct_answer === answer )
           {
               correctAnswerConfity();
           }
       else
           {
               //  openPopup('modal4','0');
               ig.game.spawnEntity( EntitytextForWrongAnswer, 120, 65 );
           }
    }

    //--animation for correct answer
    function correctAnswerConfity(){
        ig.game.spawnEntity( EntitytextForCorrectAnswer, 120, 65 );
        for (var i = 0 ; i<= 200; i++ )
            {
                var xPos =  Math.floor(Math.random() * (900 - (-80))) + (-80);
                var yPos =  Math.floor(Math.random() * (-35 - (-225))) + (-225);
                ig.game.spawnEntity( EntityCurrectAnswerRotationPopUp1, xPos, yPos );
                var rotation = Math.floor(Math.random() * (4 - 1)) + 1;
               // ig.game.rotation ++;
            }
    }

    //--set content for question and answer
    function setNextQuestionAndAnswer(){
        document.getElementById("question").innerText =  globals.filterQus[ig.game.currentQuestionNumber].title;
        for (var i=1;i<= 6; i++)
        {
            document.getElementById("ans"+i).innerText =  globals.filterQus[ig.game.currentQuestionNumber].answers[i-1].title;
        }
        ig.game.currentQuestionNumber +=1;
        $(".bottom-nav-panal ul li a").removeClass('focusbox');
    }
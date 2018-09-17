var API_ENDPOINT="http://18.220.70.32:3000/api/";
var api_user_id='';
var api_module_id='';
var retake=0;
api_user_id=localStorage.getItem('user_id');
api_module_id=localStorage.getItem('assign_module_id');
retake=localStorage.getItem('retake');


function whenEducationSceneDone(){
    /*$.ajax({
        type: 'POST',
        url: "http://18.220.70.32:3000/api/modules/markModuleCompleteForPlayer",
        data: {
            "coach_id": 92,
            "module_id": 20,
            "scene_id": 26,
            "player_id": 96,
            "status":2
        },
        dataType: 'json',
        error: function (request, error) {
            alert(request);
            alert(" Can't do because: " + error);
        },
        success: function(response){
           // alert('hit success');return false;
        }
    });*/
}

//--------4/2/2018

function thisIsCurrentEducationScene(currentSceneId){
        console.log("this Is Current Education Scene   "+ currentSceneId);

    $.ajax({
        type: 'PUT',
        url: API_ENDPOINT+"modules/markModuleCompleteForPlayer",
        data: {
            "module_id": api_module_id,
            "scene_id": currentSceneId,
            "player_id": api_user_id,
            "retake": retake,
            "status":1
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        },
        success: function(response){
           // alert('hit success');return false;
        }
    });

}

function whenCurrentEducationScenemarkDone(doneSceneId){
    console.log("this is done education Scene------"+doneSceneId);
    $.ajax({
        type: 'PUT',
        url: API_ENDPOINT+"modules/markModuleCompleteForPlayer",
        data: {
            "module_id": api_module_id,
            "scene_id": doneSceneId,
            "player_id": api_user_id,
            "retake": retake,
            "status":2
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        },
        success: function(response){
           // alert('hit success');return false;
        }
    });

}

//------ tested by ankit
function thisIsCurrentTestingScene(){
      console.log(" ========This Is current testing Scene=========="+globals.dataFromAPI[0].scenes[ig.game.sceneCounter].id);

    $.ajax({
        type: 'POST',
        url: API_ENDPOINT+"scene_status",
        data: {
            "scene_id": globals.dataFromAPI[0].scenes[ig.game.sceneCounter].id,
            "player_id": api_user_id,
            "start_date": getCurrentDateTime(),
            "retake_number":retake,
            "status": 1
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        }
    });

}

function whenCurrentTestingSceneMarkedDone(){
    // tested gives you an id of current test scene done
    console.log(" =====when testing Scene Done  --== "  + globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].id);

    $.ajax({
        type: 'POST',
        url: API_ENDPOINT+"scene_status/updateSceneStatus",
        data: {
            "scene_id":globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].id,
            "player_id":api_user_id,
            "end_date": getCurrentDateTime(),
            "retake":retake,
            "status": 2
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        }
    });
}

function thisIsCurrentQuestionInScene(Qid){
    console.log("==THIS IS CURRENT QUESTIO DISPLAYED ======="+Qid);
    $.ajax({
        type: 'POST',
        url: API_ENDPOINT+"question_status",
        data: {
            "question_id": Qid,
            "player_id": api_user_id,
            "start_date": getCurrentDateTime(),
            "retake_number":retake,
            "status": 1
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        }
    });
}

function whenQuestionAattempted (QusId,answer){
    //tested
      console.log("====when player attampted  answer  q id "+ QusId);
    answerDetail =
        {
            QuestionId: globals.filterQus[ig.game.currentQuestionNumber-1].id,
            answerId: answer,
            time: ig.game.displaytimer
        };
    ig.game.answerToApi.push(answerDetail);
    console.log("-----------answer give to server ---------------------");
    console.log(answerDetail);
    console.log(answerDetail.QuestionId);
    console.log(answerDetail.answerId);
    console.log(answerDetail.time);
    // Save data in assignments_attempts table 

    $.ajax({
        type: 'POST',
        url: API_ENDPOINT+"assignments_attempts",
        data: {  
            "question_id":answerDetail.QuestionId,
            "user_id":api_user_id,          
            "time_taken": answerDetail.time,
            "answer_id": answerDetail.answerId,
            "retake":retake
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        }
    });


    // Change question status in DB
    $.ajax({
        type: 'POST',
        url: API_ENDPOINT+"question_status/updateQuestionStatus",
        data: {  
            "question_id":QusId,
            "player_id":api_user_id,          
            "end_date": getCurrentDateTime(),
            "retake":retake,
            "status": 2
        },
        dataType: 'json',
        error: function (request, error) {
            console.log(request);
            console.log(" Can't do because: " + error);
        }
    });
}

function getCurrentDateTime() 
  {
    var d = new Date();
    return (    
         
        d.getFullYear() + "-" + 
        ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("00" + d.getDate()).slice(-2) + " " +
        ("00" + d.getHours()).slice(-2) + ":" + 
        ("00" + d.getMinutes()).slice(-2) + ":" + 
        ("00" + d.getSeconds()).slice(-2)
    );

  }
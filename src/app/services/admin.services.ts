import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import swal from 'sweetalert2';

@Injectable()
export class AdminServices {
  
  private API_ENDPOINT:string;
  constructor(public _http: Http) {
      this.API_ENDPOINT="http://18.220.70.32:3000/api/";
    }
  
  private static json(res: Response): any {
        return res.text() === "" ? res : res.json();
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }
   
  

/***************************** ================= *********************************/
/***************************** Add Data Services *********************************/
/***************************** ================= *********************************/

public addTableData(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }
  
public makePayment(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/makePayment/?params="+JSON.stringify(data);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }
public addUserDetails(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/addUserDetails";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }

public uploadFile(container_name:any,data:any)
  {
    var url=this.API_ENDPOINT+"containers/"+container_name+"/upload";
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }
public addCoachPlayers(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/addCoachPlayers";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }
public assignPlayersToScenes(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/assignPlayersToScenes";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }

public resetPasswordEmail(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/reset";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }

public resetPassword(data:any,token:any)
    {
      var url=this.API_ENDPOINT+'users/resetPasswordData';
      let headers = new Headers();
      
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data ,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }

/***************************** ==================== *********************************/
/***************************** Update Data Services *********************************/
/***************************** ==================== *********************************/


// Below function is used to change the is_paid status of a user when payment is successful after registration 

public updateIsPaid(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }


public updateUserDetails(table_name:any,data:any)
      {
        var url=this.API_ENDPOINT+table_name+"/updateUserDetails";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, data,{headers: headers})
            .map((res: Response) => AdminServices.json(res))
            .catch(this.handleError);
      }  

public updateTableData(table_name:any,data:any)
  {
    var url=this.API_ENDPOINT+table_name;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public updateTableDataById(table_name:any,data:any,id:any)
  {
    var url=this.API_ENDPOINT+table_name+'/'+id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public updateProfile(table_name:any,data:any)
      {
        var url=this.API_ENDPOINT+table_name+"/updateProfile";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, data,{headers: headers})
            .map((res: Response) => AdminServices.json(res))
            .catch(this.handleError);
      } 
// Below function is used to change the is_active status of a user

public updateIsActive(table_name:any,data:any)
  {
    var url=this.API_ENDPOINT+table_name+'/updateIsActive';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public resendInvite(table_name:any,data:any)
  {
    var url=this.API_ENDPOINT+table_name+'/resendInvite';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public retakeAssignment(table_name:any,data:any)
  {
    var url=this.API_ENDPOINT+table_name+'/retakeAssignment';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, data,{headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

/***************************** ==================== *********************************/
/***************************** Delete Data Services *********************************/
/***************************** ==================== *********************************/

public deleteTableData(table_name:any,id:any)
    {
      var url=this.API_ENDPOINT+table_name+'/'+id;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.delete(url, {headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }


/***************************** ================= *********************************/
/***************************** Get Data Services *********************************/
/***************************** ================= *********************************/


public getClientToken(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/getClientToken";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.get(url, data)
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }
public getFormationsByAgeGroup(table_name:any,data:any)
    {
      var url=this.API_ENDPOINT+table_name+"/getFormationsByAgeGroup";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data,{headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }

public getAgeGroupDetails(payload)
{
  var url=this.API_ENDPOINT+"age_groups/getAgeGroupDetails";
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this._http.post(url, payload,{headers: headers})
      .map((res: Response) => AdminServices.json(res))
      .catch(this.handleError);
}

public getModulesOfSport(table_name:any,data:any)
  {
    var url=this.API_ENDPOINT+table_name+"/getModulesOfSport/?params="+JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url, data)
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public getSingleData(table_name:any,id:any)
  {
    var url=this.API_ENDPOINT+table_name+'/'+id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url, {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public getQuestionData(table_name:any,id:any)
  {
    var url=this.API_ENDPOINT+table_name+'/getQuestionnaire/?question_id='+id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url, {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }

public getQuestionDetails(table_name:any,payload:any)
  {
    var url=this.API_ENDPOINT+table_name+'/getQuestionDetails';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, payload, {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
  }
 public getTableData(table_name:any,filters:any)
    {
      var url=this.API_ENDPOINT+table_name+'/?filter='+JSON.stringify(filters);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.get(url, {headers: headers})
          .map((res: Response) => AdminServices.json(res))
          .catch(this.handleError);
    }
 public getPlayersInvitedByCoachId(table_name:any,user_id:any,team_id:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getPlayersInvitedByCoachId/?filters='+JSON.stringify({coach_id:user_id,team_id:team_id});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }
  public getModulesWithScenes(table_name:any,sport_id:any,age_group_value:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getModulesWithScenes/?filters='+JSON.stringify({sport_id:sport_id,age_group_value:age_group_value});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getAssignedModulesWithScenesOfPlayers(table_name:any,player_id:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getAssignedModulesWithScenesOfPlayers/?player_id='+player_id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }
  
  public getPlayersDashboardContent(table_name:any,payload:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getPlayersDashboardContent/?player='+JSON.stringify(payload);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getTeamRosters(table_name:any,payload:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getTeamRosters/?payload='+JSON.stringify(payload);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getTeamPlayersStats(table_name:any,team_id:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getTeamPlayersStats/?team_id='+team_id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getTeamPlayersStatsByPlayerId(table_name:any,payload:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getTeamPlayersStatsByPlayerId/?payload='+JSON.stringify(payload);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getTeamsOfPlayerByPlayerId(table_name:any,payload:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getTeamsOfPlayerByPlayerId/?payload='+JSON.stringify(payload);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public getLatestRetakeValue(table_name:any,payload:any)
   {
     var url=this.API_ENDPOINT+table_name+'/getLatestRetakeValue/?payload='+JSON.stringify(payload);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url,  {headers: headers})
        .map((res: Response) => AdminServices.json(res))
        .catch(this.handleError);
   }

  public showAlert(message,showOkButton=false,allowOutsideClick=false)
    {
      swal.setDefaults({showConfirmButton: showOkButton, allowOutsideClick:allowOutsideClick});
      swal(message);
    }

  public hideAlert()
    {
      swal.close();
    }

}
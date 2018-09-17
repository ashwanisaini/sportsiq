import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthServices {
  
  private API_ENDPOINT:string;
  constructor(public _http: Http) {
      this.API_ENDPOINT="http://18.220.70.32:3000/api/";
    }

  public login(data:any)
    {
      var url=this.API_ENDPOINT+'users/login';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data ,{headers: headers})
          .map((res: Response) => AuthServices.json(res))
          .catch(this.handleError);
    }

  public changePassword(data:any)
    {
      var url=this.API_ENDPOINT+'users/change-password';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this._http.post(url, data ,{headers: headers})
          .map((res: Response) => AuthServices.json(res))
          .catch(this.handleError);
    }
  
   private static json(res: Response): any {
        return res.text() === "" ? res : res.json();
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }

}

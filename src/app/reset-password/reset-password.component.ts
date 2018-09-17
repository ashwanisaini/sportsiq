import { Component,OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {

  public password:any;
  public confirm_password:any;
  public token:string;
  

	constructor( private formBuilder: FormBuilder, public http: Http,private _admin_services:AdminServices,private route: ActivatedRoute,private router: Router)
		{			
			if (localStorage.getItem('user_id') && localStorage.getItem('access_token')) {
	            this.router.navigate(['pages/dashboard']);
	        }			
		}
		

	ngOnInit()
		{
			this.token= this.route.snapshot.params['token'];
		}

	

	public resetPassword() 
		{            
			if(this.password.trim()!='')
				{
					if(this.password===this.confirm_password)
						{
							this._admin_services.showAlert('Processing...');
							this._admin_services.resetPassword({newPassword:this.password,accessToken:this.token},this.token).subscribe(
						            response => {       
						               if(response.length>0)
						               	{
						               		var payload=response[0];
						               		payload.password=this.password;
						               		this._admin_services.updateTableData('users',payload).subscribe(
						               				password_response=>{
						               					if(password_response.length>0)
						               						{
						               							this._admin_services.deleteTableData('AccessToken',this.token);
						               						}
						               					this._admin_services.showAlert('Your password has been reset.',true,true);
						               					this.password='';
						               					this.confirm_password='';

						               				},
						               				paasowrd_error=>{
						               					console.log(paasowrd_error);
						               					this._admin_services.showAlert('Password could not be reset, please try again later.',true,true);
						               				}
						               			);
						               	}
						               else
						               	{
						               		this._admin_services.showAlert('Token is not valid or expired.',true,true);
						               	}
						            },
						            error => {
						             	console.log(error);   
						             	this._admin_services.showAlert('Token is not valid or expired.',true,true);
						            }); 			
							
						}
					else	
						{
							this._admin_services.showAlert('Password and confirm password do not match.',true,true);
						}
				}
			else
				{
					this._admin_services.showAlert('Please enter password.',true,true);
				}
    	} 
}

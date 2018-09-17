import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AuthServices} from '../services/auth.services';
import {AdminServices} from '../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public user:any;
  public user_id:any;
  public token:string;
  

	constructor( private formBuilder: FormBuilder, public http: Http,private _services:AuthServices,private _admin_services:AdminServices,private route: ActivatedRoute,private router: Router)
		{
			
			if (localStorage.getItem('user_id') && localStorage.getItem('access_token')) {
	            this.router.navigate(['pages/dashboard']);
	        }       


        
			this.user = this.formBuilder.group({
		      email: ['', Validators.required],
		      password: ['', Validators.required],
		    });

		    this.user_id='';
		    this.token='';
		}
		

	ngAfterViewChecked()
		{
			
		}

	

	public login() {    
        var payload = {email: this.user.email,password: this.user.password};         
        // Show popup on adding

        if(this.user.email!='' && this.user.password!='')
       		{
	   			  swal.setDefaults({showConfirmButton: false});
		          swal('Logging in...');        
					this._services.login(payload).subscribe(
			            response => {       
			                swal.close();
				            swal.setDefaults({showConfirmButton: true});
				            
				            if(typeof response.userId!=undefined && response.userId!=undefined && typeof response.id!=undefined && response.id!=undefined)
				              {              
				                this._admin_services.getTableData('users',{"where":{id:response.userId}}).subscribe(
			              		response=>{
			              			if(typeof response.id!=undefined && response.id!=undefined)
			              			{
			              				if(response.role==2)
			              					this.router.navigate(['frontend/coach/dashboard']); 
			              				else if(response.role==3)
			              					this.router.navigate(['frontend/players/dashboard']); 

			              				window.location.reload();  
			              			}
			              		},
			              		error=>{}
			              		);
				              }
			            },
			            error => {
			                console.log(error);
			                swal.setDefaults({showConfirmButton: true});
			            	swal('Login Failed', 'Please enter correct Username and Password', 'error')
			            }
			        ); 				
       		}
        else
       		{
       			swal('Error', 'Please fill Username and Password', 'error')
       		}  


    }
 
}

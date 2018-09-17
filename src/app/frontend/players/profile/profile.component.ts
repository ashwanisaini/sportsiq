import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnDestroy, Renderer2, Inject,Directive } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../../../services/admin.services';
import {AuthServices} from '../../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader,FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import * as Constants from '../../../services/constants';
declare var jquery:any;
declare var $ :any;
import * as ngCore from '@angular/core';
import * as braintree from 'braintree-web';
declare var braintree: any;
const now=new Date();
	
@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class PlayerProfileComponent {
public sports:any;
public levels:any;
public states:any;
public cities:any;
public user_id:any;
public isClicked:number;
public submitClicked:number;
public role:any;
public minDate:any;
public maxDate:any;

// Player's Details
public user:any;
public first_name:any;
public email:any;
public last_name:any;
public age:any;
public coach_name:any;
public sport:any;
public club:any;
public team_name:any;
public address:any;
public state:any;
public city:any;
public gender:any;
public zipcode:any;
public phone_number:any;
public parent_one_name:any;
public parent_one_phone:any;
public parent_one_email:any;
public parent_two_name:any;
public parent_two_phone:any;
public parent_two_email:any;	
public show_parent:any;
public player_age:any;
public player_logo:any;
public profile_pic_uploader: FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT + "containers/players/upload"
    });
public previous_image:any;

	constructor( private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private _auth_services:AuthServices,private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {
	   	this.user_id=localStorage.getItem('user_id');    
	   	this.role=localStorage.getItem('user_role');              
        this.levels=[1,2,3,4,5,6,7,8,9,10];
		this.states=['New York','California','Texas','Alaska','Mexico','Nevada','Honolulu'];
		this.cities=['Chicago','Phoenix','San Diego','	Pearland','Richardson','Gresham','Palm Bay','Richmond'];		
		this.show_parent=0;
		this.minDate = {year: 1950, month: 1, day: 1};
		this.maxDate={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
		this.player_age={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
		this._services.getTableData("sports",{"where":{"is_active":1}}).subscribe(
              response => {
                this.sports=response;
              },
              error => {
                  console.log(error);
                  //this.alertMessage = 'error in response';
              }
          );    
        

		this._services.getTableData("users",{"where":{"id":this.user_id}}).subscribe(
              userPrimaryData => {
              	if(typeof userPrimaryData!=undefined && userPrimaryData!=undefined && userPrimaryData.length>0)
                	{
                		this.user=userPrimaryData[0];
                		this.first_name=userPrimaryData[0].first_name;
                		this.last_name=userPrimaryData[0].last_name;
                		this.email=userPrimaryData[0].email;
                		this.gender=userPrimaryData[0].gender;
                		this.age=userPrimaryData[0].age;

                		if(this.age){
                			let tempobj = this.age.split('-');
                			let tmpdateobj = {
                				'year':parseInt(tempobj[0]),
                				'month':parseInt(tempobj[1]),
                				'day':parseInt(tempobj[2]),
                			}
                			console.log(tmpdateobj);
                			this.player_age = tmpdateobj;
                		}
                		//this.player_age=this.age;
                		// Get user other details
                		this._services.getTableData("user_details",{"where":{"user_id":this.user_id}}).subscribe(
			              userOtherDetails => {
			                if(typeof userOtherDetails!=undefined && userOtherDetails!=undefined && userOtherDetails.length>0)
			                	{
			                		if(userOtherDetails.length>0)
				                		{
				                			for(let i=0;i<userOtherDetails.length;i++)
					                			{
					                				if(userOtherDetails[i].meta_key=='player_logo'){
					                					if(userOtherDetails[i].meta_value!=null && userOtherDetails[i].meta_value!='')
						                					{
						                						this[userOtherDetails[i].meta_key]=Constants.API_ENDPOINT+'/containers/players/download/'+userOtherDetails[i].meta_value;
						                						this.previous_image=userOtherDetails[i].meta_value;
						                					}
					                					else
					                						{
					                							this[userOtherDetails[i].meta_key]='';
					                							this.previous_image='';
					                						}
					                				}
					                				else
					                					this[userOtherDetails[i].meta_key]=userOtherDetails[i].meta_value;
					                			}
				                		}
			                	}
				              },
				              error => {
				                  console.log(error);
				                  //this.alertMessage = 'error in response';
				              }
				          );    
                	}
              },
              error => {
                  console.log(error);
                  //this.alertMessage = 'error in response';
              }
          );    

		this.profile_pic_uploader.onErrorItem = (item, response, status, headers) => this.onErrorProfilePic(item, response, status, headers);
        this.profile_pic_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessProfilePic(item, response, status, headers);

	  }

	onSuccessProfilePic(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.updateProfile();
    }

    onErrorProfilePic(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        this.updateProfile();
    }

	// Upload coach logo to the server
    fileUploadProfilePic() {
    	swal.setDefaults({showConfirmButton: false,allowOutsideClick:false});
		swal('Processing...');	        
        if (this.profile_pic_uploader.queue.length > 0) {
            const queueIndex = 0;// Single file upload Concept
            let file_ext = this.profile_pic_uploader.queue[queueIndex].file.name.split('.').pop();
            let file_name = Math.random().toString(36).replace('.', '') + "." + file_ext;
            this.player_logo = file_name;
            this.profile_pic_uploader.queue[queueIndex].file.name = file_name;
            let response: any = this.profile_pic_uploader.queue[queueIndex].upload();
            this.profile_pic_uploader.queue = [];
        }
        else{
        	this.player_logo=this.previous_image;
            this.updateProfile();
        }

    }

    readProfilePicUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                this.player_logo = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    refreshFileList() {
        this.profile_pic_uploader.queue = [];
    }

    // Update Player Details
	public updateProfile()
		{
			var payload_user=this.user;

					payload_user.first_name=this.first_name;
					payload_user.last_name=this.last_name;
					payload_user.gender=this.gender;
					payload_user.age=this.age.toString();
					payload_user.user_id=this.user_id;
					payload_user.role=this.role;
				
					
					      
					this._services.updateProfile("users",payload_user).subscribe(
		                user_response => {       
		                    console.log(user_response);
		                	if(typeof user_response.success!=undefined && user_response.success==1)
		                		{		                			
		                			var payload_user_details=[{
										sport:this.sport,
										coach_name:this.coach_name,
										club:this.club,
										address:this.address,
										team_name:this.team_name,
										state:this.state,
										city:this.city,
										zipcode:this.zipcode,
										phone_number:this.phone_number,
										parent_one_name:this.parent_one_name,
										parent_one_phone:this.parent_one_phone,
										parent_one_email:this.parent_one_email,
										parent_two_name:this.parent_two_name,
										parent_two_phone:this.parent_two_phone,
										parent_two_email:this.parent_two_email,
										player_logo: this.player_logo

									},{user_id:this.user_id,email:this.email,name:this.first_name+' '+this.last_name}];

				                	this._services.updateUserDetails("users",payload_user_details).subscribe(
						                response => {       
						                	swal.close();								
						                	swal.setDefaults({showConfirmButton: true});
						                    swal('Profile Update', 'Information has been updated successfully', 'success');
						                    window.location.reload();	
						                },	
						                error => {
						                	var body=JSON.parse(error._body);
						                	swal.setDefaults({showConfirmButton: true});
						                    swal('Oops...', JSON.stringify(body.error.details.messages), 'error')
						                }
						            ); 				                	
						        }
						    else
						   		{
						   			swal.setDefaults({showConfirmButton: true});
						   			swal('Oops...', 'Something went wrong!', 'error')
						   		}

		                },
		                error => {
		                	var body=JSON.parse(error._body);
		                	console.log(body.error);
		                	
		                	swal.setDefaults({showConfirmButton: true});
		                    swal('Oops...', "Something went wrong.", 'error')
		                }
		            ); 				
		}

    public showPassword()
		{			
			if($("#show_password").text()=='SHOW'){
			$("#show_password").text('HIDE');
			$("#password").attr('type','text');		
			}
			else
			{
				$("#show_password").text('SHOW');
				$("#password").attr('type','password');		
			}		
		}

	public showParents(player_age)
		{
			if(player_age<18)
				this.show_parent=1;
			else
				this.show_parent=0;
		}

	selectGender(g)
		{
			this.gender=g;
		}
	onDateChange(date) {
	    this.age=date.year+'-'+date.month+'-'+date.day;
	    let years:any;
	    let d1:any;
	    let d2:any;
	    d1=new Date();
	    d2=new Date(date.year+'-'+date.month+'-'+date.day);
	     years = ((d1-d2)/(24*60*60*1000*365));
	    this.showParents(parseInt(years));
	  }
  
}

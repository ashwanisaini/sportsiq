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

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class CoachDashboardComponent {
public age_groups: any;
public age_groups_array: any;
public divToDisplay:number; // 1: Team Listing, 2: Add/Update Team
public team:any;
public team_logo_uploader:FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT+"containers/coaches/upload/"
    });
public teams:any;
public username:any;
public image_path:any;
public form_title:string;
public user_id:any;
public url:any;
public current_edit_image:string;
public sport_id:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private _auth_services:AuthServices,private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private renderer: Renderer2) {
	   	this.divToDisplay=1;
	   	this.form_title="Add";
	   	this.username=localStorage.getItem('first_name')+' '+localStorage.getItem('last_name');
	   	this.getTeams();
	   	this.url=Constants.API_ENDPOINT;
	   	this.user_id=localStorage.getItem('user_id');
	   	this._services.getTableData('user_details',{"where":{"user_id":this.user_id,"meta_key":"sport"}}).subscribe(
            response => {   

            	this.sport_id=response[0].meta_value;
            	localStorage.setItem('sport_id',this.sport_id);
            	console.log(this.sport_id);
            },
            error => {
                console.log(error);
                
            });   

	   	this.sport_id=localStorage.getItem('sport_id');
	   	//this.age_groups_array=[];
	   	this.image_path=this.url+'containers/coaches/download/';
	   	this.user_id=localStorage.getItem('user_id');
	   	this.team={team_name:'',team_logo:'',age_of_team:'',user_id:this.user_id};
	   	
	   	// Code for generating drop down of Age of Team
		this.age_groups=[];
		let current_date=new Date();
		let current_year=current_date.getFullYear();
		this.age_groups_array=[];
		for(let i=current_year;i>(current_year-22);i--)
			{
				if((current_year-i)==20)
					{
						this.age_groups.push({id:i,val:'High School Age'});
						this.age_groups_array[i]='High School Age';
					}
				else if((current_year-i)==21)
					{
						this.age_groups.push({id:i,val:'College Age'});
						this.age_groups_array[i]='College Age';
					}
				else if((current_year-i)>5)	
					{
						this.age_groups.push({id:i,val:i+' (Under '+(current_year-i)+')'});
						this.age_groups_array[i]=i+' (Under '+(current_year-i)+')';
					}

			}

	   	/*this._services.getTableData("age_groups",{"where":{"is_active":1}}).subscribe(
              response => {
                this.age_groups=response;
                if(response.length>0)
                	{
                		for(let i=0;i<response.length;i++)
                			{
                				if(response[i].under_or_above==1)
                					this.age_groups_array[response[i].id]="Under "+response[i].group_name;
                				else if(response[i].under_or_above==2)
                					this.age_groups_array[response[i].id]="Above "+response[i].group_name;
                				else
                					this.age_groups_array[response[i].id]=response[i].group_name;
                				console.log(this.age_groups_array);
                			}
                	}
              },
              error => {
                  console.log(error);                 
              }
          );  */

	   	this.team_logo_uploader.onErrorItem = (item, response, status, headers) => this.onErrorTeamLogo(item, response, status, headers);
		this.team_logo_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessTeamLogo(item, response, status, headers); 

	  }

	public addOrUpdateTeam()
		{
			this.fileUploadChangeTeam();
		}

	public addOrUpdateTeamData()
		{
			var payload_team_details=this.team;
			swal.setDefaults({showConfirmButton: false,allowOutsideClick:false});
		    swal('Processing...');
		    console.log(this.team);	
		    this.image_path=this.url+'containers/coaches/download/';
		    if(typeof this.team.id!=undefined && this.team.id!=undefined)
		    	{
		    		this._services.updateTableData("teams",payload_team_details).subscribe(
	                teams_response => {       
	                    swal.setDefaults({showConfirmButton: true});
	                    swal('Team updated successfully');
	                    this.divToDisplay=1;
	                    this.getTeams();
	                },	
	                error => {
	                	var body=JSON.parse(error._body);
	                	swal.setDefaults({showConfirmButton: true});
	                    swal('Oops...', JSON.stringify(body.error.details.messages), 'error');
	                    //this.divToDisplay=1;
	                }
	            ); 
		    	}   
		    else
			    {
			    	payload_team_details.sport_id=this.sport_id;
			    	this._services.addTableData("teams",payload_team_details).subscribe(
	                teams_response => {       
	                    swal.setDefaults({showConfirmButton: true});
	                    swal('Team added successfully');
	                    this.divToDisplay=1;
	                    this.getTeams();
	                },	
	                error => {
	                	var body=JSON.parse(error._body);
	                	swal.setDefaults({showConfirmButton: true});
	                	if(typeof body.error.details!=undefined && body.error.details!=undefined)
	                    	swal('Oops...', JSON.stringify(body.error.details.messages), 'error');
	                    else if(typeof body.error.message!=undefined && body.error.message!=undefined)
	                    	swal('Oops...', JSON.stringify(body.error.message), 'error');
	                    else
	                    	swal('Oops...', 'Something went wrong.', 'error');
	                    //this.divToDisplay=1;
	                }
	            ); 
			    }     
        	
		}

	onSuccessTeamLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.image_path=this.url+'containers/coaches/download/';
        this.addOrUpdateTeamData();      
    }

    onErrorTeamLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
       	this.image_path=this.url+'containers/coaches/download/';
       	this.addOrUpdateTeamData();
    }

    readCoachTeamLogoUrl(event:any) {
	  if (event.target.files && event.target.files[0]) {
	  	this.image_path='';
	    var reader = new FileReader();
	    reader.onload = (event:any) => {
	      this.team.team_logo = event.target.result;
	    }
	    reader.readAsDataURL(event.target.files[0]);
	  }
	}


	// Upload coach team  to the server 
 	fileUploadChangeTeam(){
        if(this.team_logo_uploader.queue.length>0)
	        {  
	          const queueIndex = 0;// Single file upload Concept       
	          var file_ext=this.team_logo_uploader.queue[queueIndex].file.name.split('.').pop();
	          var file_name=Math.random().toString(36).replace('.','')+"."+file_ext;
	          this.team.team_logo=file_name;
	          this.team_logo_uploader.queue[queueIndex].file.name=file_name;
	          let response:any=this.team_logo_uploader.queue[queueIndex].upload();        
	          this.team_logo_uploader.queue = [];
	        }
	   	else
	   		{
	   			this.addOrUpdateTeamData();
	   		}
	    }

	refreshFileList()
	    {
	      console.log("I am here");
	      this.team_logo_uploader.queue = [];
	    }

	getTeams()
		{
			this._services.getTableData("teams",{"where":{"user_id":localStorage.getItem('user_id')}}).subscribe(
              response => {
                this.teams=response;
              },
              error => {
                  console.log(error);                 
              }
          );  
		}


	public delete(id)
	    {
	      
	       swal({
		          title: 'Are you sure?',
		          text: 'Do you want to delete this team permanently?',
		          type: 'warning',
		          showCancelButton: true,
		          showConfirmButton: true,
		          confirmButtonText: 'Yes',
		          cancelButtonText: 'No'
		        }).then((result) => {
		          if(result.value==true)
		             {
		               this._services.deleteTableData("teams",id).subscribe(
			                response => {       
			                  swal.setDefaults({showConfirmButton: false});
			                  swal('Deleting...');  
			                  this.getTeams();
			                  this.divToDisplay=1;
			                  swal.close();
			                },
			                error => {
			                    console.log(error);
			                swal('Oops...', 'Team could not be deleted.', 'error')
			                }
			            ); 
		             }
		        });

	    }
}

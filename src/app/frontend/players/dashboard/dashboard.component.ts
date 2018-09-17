import { Component,OnInit } from '@angular/core';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import {AdminServices} from '../../../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;
import * as Constants from '../../../services/constants';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class PlayerDashboardComponent {
public invitations: any;
public image_path:any;
public url:any;
public teams:any;
public current_date:any;

	constructor(public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router) {
	   	this.url=Constants.API_ENDPOINT;
	   	//this.age_groups_array=[];
	   	this.image_path=this.url+'containers/coaches/download/';
	  }

	ngOnInit()
		{
			// Get Invitations and jined teams by current player id
	        this._services.getPlayersDashboardContent('users',{'email':localStorage.getItem('uemail'),'id':localStorage.getItem('user_id')}).subscribe(
	            response => {
	            let date_object=new Date();
	        	this.current_date=date_object.getFullYear()+'-'+('0' + (date_object.getMonth()+1)).slice(-2)+'-'+ ('0' + date_object.getDate()).slice(-2);
	            if(response.invitations.length>0)
	            	{
	            		for(var i=0;i<response.invitations.length;i++)
	            			{
	            				var date1 = new Date(this.current_date);
                                var date2 = new Date(response.invitations[i].invitation_date);
                                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	            				response.invitations[i]['expires_in'] = diffDays;
                                const someDate = new Date(response.invitations[i].invitation_date);
                                const numberOfDaysToAdd = 10;
                                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                                const dd = someDate.getDate();
                                const mm = someDate.getMonth() + 1;
                                const y = someDate.getFullYear();
                                const someFormattedDate = y + '-' +  mm + '-' + dd;
                                console.log(someFormattedDate);
                                response.invitations[i]['expiry_date'] = someFormattedDate;
	            			}
	            	}
	            console.log(response.teams);
	              this.invitations=response.invitations;
	              this.teams=response.teams;
	            },
	           error => {

	            });
	        
			$(".stat-tabs li").click(function() {
			  console.log($(this).index());
			  $(".team-tab-block").hide();
			  $(".team-tab-block").eq($(this).index()).show();
			  $(".stat-tabs li").find("a").removeClass('active');		  
			  $(this).find("a").addClass('active');
			});
		}

	// THIS FUNCTIONS IS USED TO ACCEPT/DECLINE AN INVITATION
	invitationAction(has_joined,text,invitation)
		{
			swal({
	          title: 'Do you want to '+text+' the invitation?',
	          text: '',
	          type: 'info',
	          showCancelButton: true,
	          showConfirmButton: true,
	          confirmButtonText: 'Yes',
	          cancelButtonText: 'No'
	        }).then((result) => {
	          if(result.value==true)
	             {
	             	this._services.hideAlert();
	             	this._services.showAlert('Processing...');
	             	
	             	if(has_joined==2)
	             		{
	             			this.updateInvitation(has_joined,text,invitation);
	             		}
	             	else
	             		{
			             	// Check if the player is already joined with the team of Same sport
			             	this._services.getTableData('team_members',{"where":{'sport_id':invitation.sport_id,'has_joined':1,'user_id':localStorage.getItem('user_id')}}).subscribe(
			             			response=>{
			             				if(response.length>0)
			             					{
			             						this._services.showAlert('You have already joined a team for this sport.',true,true);
			             					}
			             				else
			             					{
			             						this.updateInvitation(has_joined,text,invitation);
			             					}
			             			},
			             			error=>{

			             			}
			             		);

	                	}
	             }
	        });
		}

	// This function is called when user ACCEPT/REJECT invitation
	updateInvitation(has_joined,text,invitation)
		{
			this._services.updateTableDataById("invited_players",{has_joined:has_joined,email:invitation.email,sport_id:invitation.sport_id},invitation.id).subscribe(
            invitation_response => { 

            	if(has_joined==1)
            		{
            			this._services.getTableData('team_members',{"where":{'team_id':invitation.team_id,'has_joined':1}}).subscribe(
		             		response=>{
		             				if(typeof response!=undefined && response!=undefined)
			             				{
			             					let can_join:any;
			             					if(response.length<25)
			             						can_join=1;
			             					else
			             						can_join=0;

			             					// Add entry to Team members table
						                	this._services.addTableData("team_members",{team_id:invitation.team_id,user_id:localStorage.getItem('user_id'),has_joined:can_join,sport_id:invitation.sport_id}).subscribe(
								                invitation_response => {   			                    
								                	this.resetData();
								                },	
								                error => {
								                	console.log(error);
								                	this.error();
								                }
								            ); 		
			             				}

			             		},
			             		error=>{
			             			this._services.showAlert('Something went wrong',true,true);
			             		}
		             		);	  

            			
            		}
            	else
            		{
            			this.resetData();
            		}
            		                	
	            },	
	            error => {
	            	console.log(error);
	            	this.error();
	            }
	        ); 
		}


	// THIS FUNCTIONS IS USED TO JOIN/LEAVE A TEAM
	teamAction(has_joined,text,team)
		{
			swal({
	          title: 'Do you want to '+text+' the team?',
	          text: '',
	          type: 'info',
	          showCancelButton: true,
	          showConfirmButton: true,
	          confirmButtonText: 'Yes',
	          cancelButtonText: 'No'
	        }).then((result) => {
	          if(result.value==true)
	             {
	             	this._services.hideAlert();
	             	this._services.showAlert('Processing...');

	             	if(has_joined==0)
	             		{
	             			this.updateTeamMembers(has_joined,text,team);
	             		}
	             	else
	             		{
			             	// Check if the player is already joined with the team of Same sport
			             	this._services.getTableData('team_members',{"where":{'sport_id':team.sport_id,'has_joined':1,'user_id':localStorage.getItem('user_id')}}).subscribe(
			             			response=>{
			             				if(response.length<=0){
						             	this._services.getTableData('team_members',{"where":{'team_id':team.team_id,'has_joined':1}}).subscribe(
						             		response=>{
						             				if(typeof response!=undefined && response!=undefined)
							             				{
							             					if(response.length<25)
							             						{
							             							this.updateTeamMembers(has_joined,text,team);
							             						}
							             					else
							             						{
							             							this._services.showAlert('Room for this team has been full, you can join the room later.',true,false);
							             						}
							             				}
							             		},
							             		error=>{
							             			this._services.showAlert('Something went wrong',true,true);
							             		}
						             		);	  
						             	}
						             else
						             	{
						             		this._services.showAlert('You have already joined a team for this sport.',true,true);
						             	}
						        },
		             		error=>{
		             			this._services.showAlert('Something went wrong',true,true);
		             		}
		         			);
		         		}	                  
	             }
	        });
		}

	// Function is used to leave/join a team
	updateTeamMembers(has_joined,text,team)
		{
			this._services.updateTableDataById("team_members",{team_id:team.team_id,user_id:localStorage.getItem('user_id'),has_joined:has_joined,sport_id:team.sport_id},team.id).subscribe(
            invitation_response => {      			                    
            	this._services.hideAlert();
            	this.ngOnInit();
            },	
	            error => {
	            	console.log(error);
	            	this.error();
	            }
	        ); 
		}

	//This function is used to hide alert and Initialize the data 
	resetData()
		{
			this._services.hideAlert();
			this.ngOnInit();
		}

	// Error pop up displays when there is any error in api call
	error()
		{
			swal.setDefaults({showConfirmButton: true});
			swal('Oops...', 'Something went wrong', 'error');
		}
}

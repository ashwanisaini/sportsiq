import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnDestroy, Renderer2, Inject,Directive } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../../../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import * as Constants from '../../../services/constants';
import {Utils} from '../../../services/utils';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./feedback.component.scss'],
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent {

public team_id:any;
public coach_id:any;
public teams:any;
public team_drop_down_text:any;
public players:any;
public player_drop_down_text:any;
public feedbacks:any;
public show_feedback_form:any;
public player_id:any;
public feedback_text:any;
public month_array:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2,private helper:Utils) {
		//this.resetData();		
		this.month_array=[ 'January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];	
	  }


	ngOnInit()
		{			
			this.coach_id=localStorage.getItem('user_id');
			this.team_drop_down_text="Select Team";
			this.player_drop_down_text="Select Player";
			this.players=[];
			this.feedbacks=[];
			this.show_feedback_form=0;
			this.feedback_text='';
			this.getTeams();			
			this.runJquery();		
					
		}
	ngAfterContentChecked()
		{
			this.runJqueryForMessage();		
		}

	// This function is used to run the jquery on the page
	runJquery()
		{
			$(document).ready(function() {
				// all dropdowns
				$('#drop1,#drop2').click(function(event){
						if($(this).hasClass('active'))
							$(this).removeClass('active');
						else
							$(this).addClass('active');
						event.stopPropagation();
					});					
			});			

			$(document).ready(function() {
				$('.wrapper-dropdown-2').removeClass('active');						
			});
		}

	runJqueryForMessage()
		{
			$(document).ready(function() {
				$(".feedback-link").on('click',function() {
					console.log("----------------");
				  	if($(this).parent().find(".feedback-text").is(":visible")){
				  		$(this).text('+ VIEW FEEDBACK');
				  		$(this).parent().find(".feedback-text").hide();
					}else{
						$(this).text('- VIEW FEEDBACK');
						$(this).parent().find(".feedback-text").show();
					}
				});				
			});
		}

	// This function is used to get all the teams of current coach by coach ID
	getTeams()
		{
			this._services.getTableData("teams",{"where":{"user_id":this.coach_id}}).subscribe(
              response => {
                this.teams=response;
              },
              error => {
                  console.log(error);                 
              }
          );  
		}
	
	// This function is used to get the score ofthe players of selected team 
	getPlayers(team_id)
		{
			if(team_id!='')
				{					
					this._services.getPlayersInvitedByCoachId('users',this.coach_id,this.team_id).subscribe(					  
			            response => {   
			            	console.log(response);       	
			            	this.players=response;            	
			            },
			            error => {
			                console.log(error);
			                
			            }); 
				}
			else
				{
				}						
		}

	// This function is used to show/hide individual feedback
	showIndividualFeedback(feedback,show)
		{
			console.log(feedback);
			feedback.show=show;
		}
	// This function is used to get all the feedbacks of a player by coach id , team id and player id 
	showFeedbacks(player)
		{
			this.show_feedback_form=0;
			
			if(player!='')
				{
					this.player_drop_down_text=player.first_name+' '+player.last_name;
					this.player_id=player.id;
				}
			this._services.getTableData("feedbacks",{"where":{"coach_id":this.coach_id,"team_id":this.team_id,"player_id":this.player_id},"order":["created_at desc"]}).subscribe(
              response => {
              	for(let i=0;i<response.length;i++)
              		{
              			let date=new Date(response[i].created_at);
              			response[i].date=('0'+date.getDate()).slice(-2)+'-'+this.month_array[date.getMonth()]+'-'+date.getFullYear();

              			response[i].time=this.helper.timeToAMPM(('0'+date.getHours()).slice(-2)+':'+('0'+(date.getMinutes()+1)).slice(-2));
              			
              			response[i].show=false;
              		}
                this.feedbacks=response;
              },
              error => {
                  console.log(error);                 
              }
          	);  
		}
	
	// This function is used to dispay the Previous Feedbacks and Give Feedback section on the basis of 0/1 , 0: Display Previous Feedback, 1: Display Give Feedback
	sectionToDisplayFunction(val)
		{
			this.show_feedback_form=val;
		}

	// This function is used to select the team from drop down 
	selectTeam(team_id,team_name)
		{
			this.team_id=team_id;
			this.team_drop_down_text=team_name;
			this.player_drop_down_text='Select Player';
			this.feedbacks=[];
			this.getPlayers(team_id);
		}

	// This function is used to send the feedback to the selected player of selected team
	sendFeedback()
		{
			if(this.feedback_text.trim()!='')
				{
					if(this.team_id==undefined)
						this._services.showAlert("Please select a team from drop down",true,true);
					else if(this.player_id==undefined)
						this._services.showAlert("Please select a player from drop down",true,true);
					else
						{
							this._services.showAlert("Sending feedback");
							let payload={'coach_id':this.coach_id,'team_id':this.team_id,'player_id':this.player_id,'feedback':this.feedback_text};
							this._services.addTableData('feedbacks',payload).subscribe(			  
				            response => {  
				            	this.feedback_text=''; 
				            	this._services.showAlert("Feedback has been sent to the player",true,true);    
				            	this.showFeedbacks('');
				            },
				            error => {
				                console.log(error);
				                this._services.showAlert("Feedback could not be sent to the player, please try again later",true,true);   
				            }); 
						}
				}
			else	
				{
					this._services.showAlert("Please enter feedback to send to the player",true,true);
				}
		}
}

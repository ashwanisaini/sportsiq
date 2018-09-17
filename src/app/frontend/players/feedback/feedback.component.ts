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
export class FeedbackPlayerComponent {

public team_id:any;
public teams:any;
public team_drop_down_text:any;
public feedbacks:any;
public player_id:any;
public feedback_text:any;
public month_array:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2,private helper:Utils) {
		//this.resetData();	
		this.month_array=[ 'January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];		
	  }


	ngOnInit()
		{			
			this.player_id=localStorage.getItem('user_id');
			this.team_drop_down_text="Select Team";	
			this.feedbacks=[];
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
				$('#drop1').click(function(event){
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
			// $(document).ready(function() {
			// 	$(".feedback-link").on('click',function() {
			// 		console.log("----------------");
			// 	  	if($(this).parent().find(".feedback-text").is(":visible")){
			// 	  		$(this).text('+ VIEW FEEDBACK');
			// 	  		$(this).parent().find(".feedback-text").hide();
			// 		}else{
			// 			$(this).text('- VIEW FEEDBACK');
			// 			$(this).parent().find(".feedback-text").show();
			// 		}
			// 	});				
			// });
		}

	// This function is used to get all the teams of current coach by coach ID
	getTeams()
		{
			this._services.getTeamsOfPlayerByPlayerId("users",{"player_id":this.player_id}).subscribe(
              response => {
                this.teams=response;
              },
              error => {
                  console.log(error);                 
              }
          );  
		}	
	
	// This function is used to show/hide individual feedback
	showIndividualFeedback(feedback,show)
		{
			console.log(feedback);
			feedback.show=show;
		}

	// This function is used to get all the feedbacks of a player by team id and player id 
	showFeedbacks()
		{			
			this._services.getTableData("feedbacks",{"where":{"player_id":this.player_id,"team_id":this.team_id},"order":["created_at desc"]}).subscribe(
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
	

	// This function is used to select the team from drop down 
	selectTeam(team_id,team_name)
		{
			this.team_id=team_id;
			this.team_drop_down_text=team_name;		
			this.showFeedbacks();	
		}
}

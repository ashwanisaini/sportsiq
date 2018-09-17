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
  styleUrls: ['./messages.component.scss'],
  templateUrl: './messages.component.html',
})
export class MessagesPlayerComponent {

public team_id:any;
public player_id:any;
public teams:any;
public team_drop_down_text:any;
public messages:any;
public show_message_form:any;
public message_text:any;
public month_array:any;
public image_path:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2,private helper:Utils) {
		//this.resetData();	
		this.month_array=[ 'January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];		
	  }


	ngOnInit()
		{			
			this.player_id=localStorage.getItem('user_id');
			this.team_drop_down_text="Select Team";
			this.messages=[];
			this.show_message_form=0;
			this.message_text='';
			this.team_id='';
			this.image_path=Constants.API_ENDPOINT+'containers/messages/download/';
			this.getTeams();			
			this.runDropDownJquery();		
					
		}
	ngAfterContentChecked()
		{
			this.runJquery();		
		}

	// This function is used to run the jquery on the page
	runDropDownJquery()
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

			$(document).click(function() {
				$('.wrapper-dropdown-2').removeClass('active');
			});
		}
	// This function is used to run the jquery on the page
	runJquery()
		{
			$(document).ready(function() {
				
				$(".feedback-link").click(function() {
				
			  	if($(this).parent().find(".feedback-text").is(":visible")){
			  		$(this).text('+ VIEW MESSAGE');
			  		$(this).parent().find(".feedback-text").hide();
				}else{
					$(this).text('- VIEW MESSAGE');
					$(this).parent().find(".feedback-text").show();
				}		
				});
			});			
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
	

	// This function is used to get all the messages of a player by coach id , team id and player id 
	showMessages(team_id)
		{
			this.show_message_form=0;			
			this.team_id=team_id;
			this._services.getTableData("messages",{"where":{"team_id":this.team_id},"order":["created_at desc"]}).subscribe(
              response => {
              	for(let i=0;i<response.length;i++)
              		{
              			let date=new Date(response[i].created_at);
              			response[i].date=('0'+date.getDate()).slice(-2)+'-'+this.month_array[date.getMonth()]+'-'+date.getFullYear();

              			response[i].time=this.helper.timeToAMPM(('0'+date.getHours()).slice(-2)+':'+('0'+(date.getMinutes()+1)).slice(-2));
              		}
                this.messages=response;
              },
              error => {
                  console.log(error);                 
              }
          	);  
		}
	
	// This function is used to show/hide individual message
	showIndividualMessage(message,show)
		{
			message.show=show;
		}
		
	// This function is used to select the team from drop down 
	selectTeam(team_id,team_name)
		{
			this.team_id=team_id;
			this.team_drop_down_text=team_name;
			this.showMessages(this.team_id);
		}	
}

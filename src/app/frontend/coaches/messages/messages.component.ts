import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnDestroy, Renderer2, Inject,Directive } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../../../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import { FileUploader,FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
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
export class MessagesComponent {

public team_id:any;
public coach_id:any;
public teams:any;
public team_drop_down_text:any;
public messages:any;
public show_message_form:any;
public message_text:any;
public month_array:any;
public message_logo:any;
public image_path:any;
public message_pic_uploader: FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT + "containers/messages/upload"
    });

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2,private helper:Utils) {
		//this.resetData();	
		this.month_array=[ 'January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];	

		this.message_pic_uploader.onErrorItem = (item, response, status, headers) => this.onErrorMessagePic(item, response, status, headers);
        this.message_pic_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessMessagePic(item, response, status, headers);

	  }


	ngOnInit()
		{			
			this.coach_id=localStorage.getItem('user_id');
			this.team_drop_down_text="Select Team";
			this.messages=[];
			this.show_message_form=0;
			this.message_text='';
			this.image_path=Constants.API_ENDPOINT+'containers/messages/download/';
			this.getTeams();			
			this.runDropDownJquery();		
					
		}
	ngAfterContentChecked()
		{
			this.runJquery();		
		}

	onSuccessMessagePic(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.sendMessage();
    }

    onErrorMessagePic(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        this.sendMessage();
    }

    // Upload coach logo to the server
    fileUploadMessagePic() {
    	swal.setDefaults({showConfirmButton: false,allowOutsideClick:false});
		swal('Processing...');	  
        if (this.message_pic_uploader.queue.length > 0) {
            const queueIndex = 0;// Single file upload Concept
            let file_ext = this.message_pic_uploader.queue[queueIndex].file.name.split('.').pop();
            let file_name = Math.random().toString(36).replace('.', '') + "." + file_ext;
            this.message_logo = file_name;
            this.message_pic_uploader.queue[queueIndex].file.name = file_name;
            let response: any = this.message_pic_uploader.queue[queueIndex].upload();
            this.message_pic_uploader.queue = [];
        }
        else{
        	this.sendMessage();
        }

    }


    readMessagePicUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                this.message_logo = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    refreshFileList() {
        this.message_pic_uploader.queue = [];
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
			/*$(document).ready(function() {
				
				$(".feedback-link").click(function() {
				
			  	if($(this).parent().find(".feedback-text").is(":visible")){
			  		$(this).text('+ VIEW MESSAGE');
			  		$(this).parent().find(".feedback-text").hide();
				}else{
					$(this).text('- VIEW MESSAGE');
					$(this).parent().find(".feedback-text").show();
				}		
				});
			});			*/
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
	
	

	// This function is used to get all the messages of a player by coach id , team id and player id 
	showMessages(team_id)
		{
			this.show_message_form=0;			
			this.team_id=team_id;
			this._services.getTableData("messages",{"where":{"coach_id":this.coach_id,"team_id":this.team_id},"order":["created_at desc"]}).subscribe(
              response => {
              	for(let i=0;i<response.length;i++)
              		{
              			let date=new Date(response[i].created_at);
              			response[i].date=('0'+date.getDate()).slice(-2)+'-'+this.month_array[date.getMonth()]+'-'+date.getFullYear();

              			response[i].time=this.helper.timeToAMPM(('0'+date.getHours()).slice(-2)+':'+('0'+(date.getMinutes()+1)).slice(-2));
              			response.show=false;
              		}
                this.messages=response;
                console.log(this.messages);
              },
              error => {
                  console.log(error);                 
              }
          	);  
		}
	

	// This function is used to show/hide individual message
	showIndividualMessage(message,show)
		{
			console.log(message);
			message.show=show;
		}

	// This function is used to dispay the Previous Messages and Give Message section on the basis of 0/1 , 0: Display Previous Message, 1: Display Give Message
	sectionToDisplayFunction(val)
		{
			this.show_message_form=val;
		}

	// This function is used to select the team from drop down 
	selectTeam(team_id,team_name)
		{
			this.team_id=team_id;
			this.team_drop_down_text=team_name;
			this.showMessages(this.team_id);
		}

	// This function is used to send the message to the selected player of selected team
	sendMessage()
		{
			if(this.message_text.trim()!='')
				{
					if(this.team_id==undefined)
						this._services.showAlert("Please select a team from drop down",true,true);
					else
						{
							this._services.showAlert("Sending message");
							let payload={'coach_id':this.coach_id,'team_id':this.team_id,'message':this.message_text,'image':this.message_logo};
							this._services.addTableData('messages',payload).subscribe(			  
				            response => { 
				            	this.message_text='';  
				            	this._services.showAlert("Message has been sent to the team",true,true);    
				            	this.showMessages(this.team_id);
				            },
				            error => {
				                console.log(error);
				                this._services.showAlert("Message could not be sent to the team, please try again later",true,true);   
				            }); 
						}
				}
			else	
				{
					this._services.showAlert("Please enter message to send to the team",true,true);
				}
		}
}

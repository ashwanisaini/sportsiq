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
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./statistics.component.scss'],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {

public team_id:any;
public user_id:any;
public teams:any;
public team_drop_down_text:any;
public players:any;
public pillars:any;
public pillar_ids:any;
public threshold_value:any;
public colspan:any; 
public player_statistics:any; // 0: Player statistics section hidden , 1: player statistics shown
public player_details:any;
public player_drop_down_text:any;
public pillar_statstics_data:any;
public statistics:any;
public current_pillar_id:any;
public feedback_text:any;
public player_id:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2) {
		//this.resetData();		
	  }


	ngOnInit()
		{			
			this.user_id=localStorage.getItem('user_id');
			this.team_drop_down_text="Select Team";
			this.players=[];
			this.threshold_value=200;
			this.player_statistics=0;
			this.current_pillar_id=0;
			this.getTeams();
			this.getEducationPillars();					
		}
	ngAfterContentChecked()
		{
				
		}

	// This function is used to run the jquery on the page
	runJquery()
		{
			$(document).ready(function() {
				$('#drop1').click(function(event){
					if($(this).hasClass('active'))
						$(this).removeClass('active');
					else
						$(this).addClass('active');
					event.stopPropagation();
				});	
			});			

			$(document).click(function() {
				// all dropdowns
				$('.wrapper-dropdown-2').removeClass('active');
			});
	

		}

	// This function is used to get all the teams of current coach by coach ID
	getTeams()
		{
			this._services.getTableData("teams",{"where":{"user_id":this.user_id}}).subscribe(
              response => {
                this.teams=response;
                this.runJquery();
              },
              error => {
                  console.log(error);                 
              }
          );  
		}

	// This function is used to get the education pillars
	getEducationPillars()
		{
			this._services.getTableData("education_pillars",{"where":{"is_active":1}}).subscribe(
              response => {
              	this.pillar_ids=[]; 
              	this.pillars=[];             			
              	if(response.length>0)
              		{
              			this.colspan=2+response.length;
              			for (let i = 0; i<response.length; i++) {
              				this.pillar_ids.push(response[i].id);
              				this.pillars[response[i].id]=response[i].name;
              			}
              		}                
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
					this._services.getTeamPlayersStats('users',this.team_id).subscribe(					  
			            response => {   
			            response=response.sort(function(a, b) {
			            	return b.total_score - a.total_score;
						});         	
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

	// This function is used to get the player statistics data by player id
	getPlayerStats(player_id)
		{
			this.player_id=player_id;
			if(this.team_id!='' && player_id!='')
				{					
					let payload={'team_id':this.team_id,'player_id':player_id};
					this._services.getTeamPlayersStatsByPlayerId('users',payload).subscribe(			 
			            response => {   
			                    this.statistics=response;	
			                    this.showPillarData(this.pillar_ids[0]);
			                    this.current_pillar_id=this.pillar_ids[0];
			            },
			            error => {
			                console.log(error);
			                
			            }); 
				}
			else
				{
				}						
		}

	selectTeam(team_id,team_name)
		{
			this.team_id=team_id;
			this.team_drop_down_text=team_name;
			this.player_drop_down_text='Select Player';
			this.player_details={};
			this.getPlayers(team_id);
		}

	showStatistics(player)
		{
			this.player_statistics=1;
			this.player_drop_down_text=player.name;
			this.player_details=player;			
			this.getPlayerStats(player.user_id);			
		}

	// This function is used to display the education pillar data on statistics page
	showPillarData(pillar_id)
		{
			console.log(this.statistics);
			console.log(pillar_id);
			this.current_pillar_id=pillar_id;
			this.pillar_statstics_data=this.statistics[pillar_id];
			console.log(this.pillar_statstics_data);
		}

	// This function is used to send the feedback to the selected player of selected team
	sendFeedback()
		{
			if(this.feedback_text.trim()!='')
				{					
					this._services.showAlert("Sending feedback");
					let payload={'coach_id':this.user_id,'team_id':this.team_id,'player_id':this.player_id,'feedback':this.feedback_text};
					this._services.addTableData('feedbacks',payload).subscribe(			  
		            response => {  
		            	this.feedback_text=''; 
		            	this._services.showAlert("Feedback has been sent to the player",true,true);    				            	
		            },
		            error => {
		                console.log(error);
		                this._services.showAlert("Feedback could not be sent to the player, please try again later",true,true);   
		            }); 						
				}
			else	
				{
					this._services.showAlert("Please enter feedback to send to the player",true,true);
				}
		}
}

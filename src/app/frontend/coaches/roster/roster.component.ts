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
  styleUrls: ['./roster.component.scss'],
  templateUrl: './roster.component.html',
})
export class RosterComponent {

public team_id:any;
public user_id:any;
public sport_id:any;
public players:any;
public player_id_to_take_action:any;
public show_modal_popup:any;
public show_popup:any;
public action_player:any;
public invite_name:any;
public current_user_name:any;
public teams:any;
public team_drop_down_text:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2) {
		//this.resetData();	
		this.team_id=this.route.snapshot.params['team_id'];	
		this.user_id=localStorage.getItem('user_id');
		this.sport_id=localStorage.getItem('sport_id');
		this.current_user_name=localStorage.getItem('first_name')+' '+localStorage.getItem('last_name');	
	  }


	ngOnInit()
		{	
					
			this.players=[];
			this.show_modal_popup=0;
			this.show_popup='';
			this.team_drop_down_text="Select Team";
			this.getTeams();
			this.runJquery();					

		}

	// This function is used to run the jquery on the page
	runJquery()
		{
			$(function() {
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
                if(this.route.snapshot.params['team_id']!=undefined){
					this.getPlayers(this.team_id);
				}
				else{
					this.getPlayers('');	
				}	
              },
              error => {
                  console.log(error);                 
              }
          );  
		}

	selectTeam(team_id,team_name)
		{
			this.team_drop_down_text=team_name;
			this.team_id=team_id;
			this.getPlayers(this.team_id);
		}

	getPlayers(team_id)
		{
			if(team_id!='')
				{	
					// Set Drop down label
					if(this.teams.length>0)
						{
							for(let i=0;i<this.teams.length;i++)
								{
									if(this.teams[i].id==team_id)
										this.team_drop_down_text=this.teams[i].team_name;
								}
						}

					this._services.getTeamRosters('users',{'coach_id':this.user_id,'team_id':this.team_id}).subscribe(					  
			            response => {            	
			            	
			            	for(let i=0;i<response.players.length;i++)
			            		{
			            			response.players[i].phone_number='';
			            			response.players[i].logo='';
			            			for(let j=0;j<response.player_details.length;j++)
			            				{
			            					if(response.players[i].id==response.player_details[j].user_id && response.player_details[j].meta_key=='phone_number')
			            						response.players[i].phone_number=response.player_details[j].meta_value;			            					

			            					if(response.players[i].id==response.player_details[j].user_id && response.player_details[j].meta_key=='player_logo')
			            						response.players[i].logo=Constants.API_ENDPOINT+'containers/players/download/'+response.player_details[j].meta_value;			            					
			            				}
			            		}
			            	this.players=response.players;
			            	
			            	
			            },
			            error => {
			                console.log(error);
			                
			            }); 
				}
			else
				{
				}			
		}

	// Function to show the Resend Invite/Delete Player Pop up
	showPopup(popup,player_name,player_id,invite_name='')
		{
			this.show_popup=popup;
			this.show_modal_popup=1;
			this.action_player=player_name;
			this.player_id_to_take_action=player_id;
			this.invite_name=invite_name;
		}

	// Close pop up
	closePopup()
		{
			this.show_popup='';
			this.show_modal_popup=0;
			this.action_player='';
		}

	// Function to make a coach inactive 
  	public deletePlayer()
	    {	      
	        let payload:any;
	        payload={id:'',is_active:0}; 
	        payload.id=this.player_id_to_take_action;
	        this._services.showAlert('Deleting...');
	        this._services.updateIsActive("users",payload).subscribe(
	                response => {       
	                  this._services.hideAlert();
                      this._services.showAlert("The user has been deleted.",true,true);
	                  this.getPlayers(this.team_id);   
	                  this.show_modal_popup=0;
					this.show_popup='';             
	                },
	                error => {
	                    console.log(error);
	                    swal.setDefaults({showConfirmButton: true});
	                    swal('Oops...', 'Something went wrong!', 'error')
	                }
	            ); 
	      
	    }


    public restorePlayer()
      {       
          let payload:any; 
          payload={id:'',is_active:1}; 
          payload.id=this.player_id_to_take_action;
          this._services.showAlert('Restoring...'); 
          this._services.updateIsActive("users",payload).subscribe(
                  response => {       
                    this._services.hideAlert();
                    this._services.showAlert("The user has been restored.",true,true);
                    this.getPlayers(this.team_id); 
                    this.show_modal_popup=0;
					this.show_popup='';          
                  },
                  error => {
                      console.log(error);
                      swal.setDefaults({showConfirmButton: true});
                      swal('Oops...', 'Something went wrong!', 'error')
                  }
              ); 
        
      }

    public resendInvite()
      {       
	      let payload:any; 
	      payload={invited_by:this.user_id,team_id:this.team_id,email:this.player_id_to_take_action,sport_id:this.sport_id,player_name:this.invite_name,invitor_name:this.current_user_name}; 
	      this._services.showAlert('Re-sending invite...'); 
	      this._services.resendInvite("users",payload).subscribe(
	              response => {       
	                this._services.hideAlert();
                    this._services.showAlert("The user has been re-invited.",true,true);
	                this.getPlayers(this.team_id);   
	                this.show_modal_popup=0;
					this.show_popup='';            
	              },
	              error => {
	                  console.log(error);
	                  swal.setDefaults({showConfirmButton: true});
	                  swal('Oops...', 'Something went wrong!', 'error')
	              }
	          ); 
        
      }

    addNewPlayer(team_id)
    	{
    		if(team_id==undefined)
    			this.router.navigate(['/frontend/coach/invite']);
    		else
    			this.router.navigate(['/frontend/coach/invite/'+team_id]);
    	}
}

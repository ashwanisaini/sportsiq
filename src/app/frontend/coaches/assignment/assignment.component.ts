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
  styleUrls: ['./assignment.component.scss'],
  templateUrl: './assignment.component.html',
})
export class CoachAssignmentComponent {
public search_query:any;
public all_invited_players:any;
public teams:any;
public teams_array:any;

public user_id:any;
public team_id:any;
public canAssign:any;
public divToDisplay:number;
public module_with_scenes:any;
public image_source:string;
public canAssignStepTwo:any;

public selectedAll: any;
public selectedAllScenes: any;
public selectedAllScenesBySubModules: any;
public selected_user_ids:any;
public selected_scenes_ids_for_module:any;
public all_invited_players_for_module:any;

public user_names_array:any;
public current_scene:any;
public showScenePopup:any;
public sub_modules:any;
public selected_sub_modules:any;
public age_group_value:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2) {
		this.resetData();
	  }


	ngOnInit()
		{			
			$('.question-label').click(function(e) {
			  	e.preventDefault();
			  console.log("WXYZs");
			    var $this = $(this);
			    if ($this.next().hasClass('show')) {
			    	$(this).find(".icon-box").addClass('plus');
			    	$(this).find(".icon-box").removeClass('minus');
			        $this.next().removeClass('show');
			        $this.next().slideUp(350);
			    } else {
			    	$(".icon-box").addClass('plus');
			    	$(".icon-box").removeClass('minus');
			    	$(this).find(".icon-box").addClass('minus');
			    	$(this).find(".icon-box").removeClass('plus');		    		    	
			        $this.parent().parent().find('.question-rows-block').removeClass('show');
			        $this.parent().parent().find('.question-rows-block').slideUp(350);
			        $this.next().toggleClass('show');
			        $this.next().slideToggle(350);
			    }
			});

			$(".stat-tabs li").click(function() {
			  console.log($(this).index());
			  $(".stats-question-block").hide();
			  $(".stats-question-block").eq($(this).index()).show();
			  $(".stat-tabs li").find("a").removeClass('active');		  
			  $(this).find("a").addClass('active');
			});




			function DropDown(el) {
			this.dd = el;
			this.initEvents();
			}

			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {
				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-2').removeClass('active');
				});


			});	
			
		}

	resetData()
		{
			this.image_source=Constants.API_ENDPOINT+'containers';
			 console.log("ABCD");
			 
			 this.divToDisplay=1;
			  this.selected_user_ids=[];
			  this.canAssign=0;
			  this.canAssignStepTwo=0;
			  this.user_id=localStorage.getItem('user_id');
			  this.teams=new Array;
			  this.teams_array=new Array;
			  this.all_invited_players=new Array;
			  this.team_id='';
			  this.age_group_value=0;
			  this._services.getTableData('teams',{"where":{"user_id":this.user_id}}).subscribe(
	            response => {            	
	            	this.teams=response;
	            },
	            error => {
	                console.log(error);
	                
	            });  

			  //this.getPlayers();
		}

	getPlayers(team_id)
		{
			this.age_group_value=0;
			this.selectedAll=false;
			this.user_names_array=[];
			this.selected_user_ids=[];
			if(team_id!='')
				{
					if(this.teams.length>0)
						{
							for(let i=0;i<this.teams.length;i++)
								{
									if(this.teams[i].id==team_id)
										{
											this.age_group_value=new Date().getFullYear()-this.teams[i].age_of_team;
										}
								}
						}
					this.teams_array=new Array;
					this.all_invited_players=new Array;
					this._services.getPlayersInvitedByCoachId('users',this.user_id,this.team_id).subscribe(
					  
			            response => {            	
			            	
			            	if(response.length>0)
			            		{
			            			let user_names_array;
			            			user_names_array=new Array;

			            			for(let i=0;i<response.length;i++)
				            			{
				            				
				            				response[i].selected=false;
				            				response[i].name = response[i].first_name + " " + response[i].last_name;
				            				this.all_invited_players.push(response[i]);
				            				user_names_array[response[i].id]=response[i].first_name+" "+response[i].last_name;
				            			}
				            		this.user_names_array=user_names_array;
			            		}
			            	console.log(this.all_invited_players);
			            },
			            error => {
			                console.log(error);
			                
			            }); 
				}
			else
				{
					this.team_id='';
					this.all_invited_players=[];
				}

			this.checkCanAssign();
		}

	public assignStepTwo()
		{
			this._services.showAlert("Getting Modules and Scenes...");

			this._services.getTableData('user_details',{"where":{"meta_key":"sport","user_id":this.user_id}}).subscribe(
	        response => {

	          // Get Modules with scenes by Sport ID
	          this._services.getModulesWithScenes('modules',response[0]['meta_value'],this.age_group_value).subscribe(
		        module_with_scenes => {		 
		        	this._services.hideAlert(); 		        	                
		          	this.module_with_scenes=module_with_scenes.modules;
		          	this.sub_modules=module_with_scenes.sub_modules;
		          	this.selectedAllScenes=new Array;
		          	this.selectedAllScenesBySubModules=new Array;
		          	this.selected_scenes_ids_for_module=new Array;
		          	this.divToDisplay=2;      
		          	if(this.module_with_scenes.length)
		          		{		
		          			console.log(this.module_with_scenes);
		          			this.all_invited_players_for_module={};          			
		          			for(let i=0;i<this.module_with_scenes.length;i++)
		          				{
		          					this.selectedAllScenes[this.module_with_scenes[i].id]=false;
		          					this.all_invited_players_for_module[this.module_with_scenes[i].id]=new Array;	
		          					this.selected_scenes_ids_for_module[this.module_with_scenes[i].id]=new Array;	 

		          					this.module_with_scenes[i].select_text='Select';         					
		          					if(this.module_with_scenes[i].scenes.length)
		          						{
		          							let scenes_array=new Array;
		          							for(let j=0;j<this.module_with_scenes[i].scenes.length;j++)
			          							{
			          								this.module_with_scenes[i].scenes[j].selected=false;
			          								this.module_with_scenes[i].scenes[j].show=false;
			          								scenes_array.push(this.module_with_scenes[i].scenes[j]); 
			          							}
			          						this.all_invited_players_for_module[this.module_with_scenes[i].id].push(scenes_array);
		          						} 
		          				}

		          			for(let i=0;i<this.sub_modules.length;i++)
		          				{
		          					this.sub_modules[i].selected=false;	          										
		          				}	
		          			console.log(this.module_with_scenes);
		          			console.log(this.sub_modules);
		          			console.log(this.selectedAllScenes);
		          		}
		          	else{
		          		this._services.showAlert("There is no modules to be assigned .",true,true);
		          		this.resetData();
		          	}

		          	this.selected_sub_modules=new Array;
		          	if(this.sub_modules.length)
		          		{
		          			this.selected_sub_modules=new Array;
		          			for(let i=0;i<this.sub_modules.length;i++)
		          				{
		          					console.log(this.selected_sub_modules[this.sub_modules[i].module_id]);
		          					if(typeof this.selected_sub_modules[this.sub_modules[i].module_id]==undefined || this.selected_sub_modules[this.sub_modules[i].module_id]==undefined){
		          							this.selected_sub_modules[this.sub_modules[i].module_id]=new Array;
		          						}
		          					//this.selected_sub_modules[this.sub_modules[i].module_id].push(this.sub_modules[i].id);
		          					if(typeof this.selected_sub_modules[this.sub_modules[i].module_id][this.sub_modules[i].id]==undefined || this.selected_sub_modules[this.sub_modules[i].module_id][this.sub_modules[i].id]==undefined)
		          						this.selected_sub_modules[this.sub_modules[i].module_id][this.sub_modules[i].id]={};

		          					this.selected_sub_modules[this.sub_modules[i].module_id][this.sub_modules[i].id].selected=false;
		          				}
		          		}
		          	//console.log(this.selected_sub_modules);
		          	

		        },
		        error => {
		        	console.log(error);
		        	this._services.showAlert("There was some error fecthing the Modules and Scenes of Sport, Please try again later.",true);
		        }); 

	        },
	        error => {
	        	console.log(error);
	            this._services.showAlert("There was some error fetching the Modules and Scenes of Sport, Please try again later.",true);	            
	        }); 
		}

	

	selectAll(e) {
		for (var i = 0; i < this.all_invited_players.length; i++) 
			this.all_invited_players[i].selected = this.selectedAll;

	    this.selected_user_ids=[];
	    if(this.selectedAll)
	    	for (var i = 0; i < this.all_invited_players.length; i++) 
	    		if(this.selected_user_ids.indexOf(this.all_invited_players[i].id)==-1)
					this.selected_user_ids.push(this.all_invited_players[i].id);			    
	    	
	    this.checkCanAssign();
	  }

	checkIfAllSelected(e,value) {
	    this.selectedAll = this.all_invited_players.every(function(item:any) {
	    	return item.selected == true;
	      });

	    if(e.target.checked){
	    	if(this.selected_user_ids.indexOf(value)==-1)
            	this.selected_user_ids.push(value);
	    
	    }
        else
            this.selected_user_ids.splice(this.selected_user_ids.indexOf(value), 1);    

        this.checkCanAssign();
	  }
	

	selectAllScenes(e,module_id) {	
		console.log(this.sub_modules);
		if(e.target.checked)
			{
				this.setText('Unselect',module_id);
			}
		else
			{
				this.setText('Select',module_id);
				this.selected_sub_modules[module_id]=[];

				for(let i=0;i<this.sub_modules.length;i++)
					{
						if(this.sub_modules[i].module_id==module_id)
							this.sub_modules[i].selected=false;
					}

				for (var i = 0; i < this.all_invited_players_for_module[module_id][0].length; i++) 
					{
						this.all_invited_players_for_module[module_id][0][i].selected = this.selectedAllScenes[module_id];
						this.all_invited_players_for_module[module_id][0][i].show = this.selectedAllScenes[module_id];
					}
			}

	    this.selected_scenes_ids_for_module[module_id]=[];	   
		this.checkCanAssignStepTwo();
	  }

	setText(text,module_id)
		{
			for(let i=0;i<this.module_with_scenes.length;i++)
				{
					if(this.module_with_scenes[i].id==module_id)
						this.module_with_scenes[i].select_text=text;
				}
		}

	checkIfAllSelectedScenes(e,value,module_id,index,sub_module_id) {
		
	    if(e.target.checked){
	    	if(typeof this.selected_scenes_ids_for_module[module_id]==undefined || this.selected_scenes_ids_for_module[module_id]==undefined)
				this.selected_scenes_ids_for_module[module_id]=new Array;

	    	if(this.selected_scenes_ids_for_module[module_id].indexOf(value)==-1)
            	this.selected_scenes_ids_for_module[module_id].push(value);            
	    }
        else
	        {
	        	this.selected_scenes_ids_for_module[module_id].splice(this.selected_scenes_ids_for_module[module_id].indexOf(value), 1); 
	        }
        this.checkCanAssignStepTwo();    
	  }
	

	selectAllScenesBySubModule(e,sub_module_id,module_id)
		{
			for(let i=0;i<this.module_with_scenes.length;i++)
				{
					if(this.module_with_scenes[i].id==module_id)
						{
							for(let j=0;j<this.module_with_scenes[i].scenes.length;j++)
								{
									if(this.module_with_scenes[i].scenes[j].sub_module_id==sub_module_id)
										{
											this.module_with_scenes[i].scenes[j].show=e.target.checked;
											this.module_with_scenes[i].scenes[j].selected=false;

											if(typeof this.selected_scenes_ids_for_module[module_id]!=undefined && this.selected_scenes_ids_for_module[module_id]!=undefined){
												console.log(this.selected_scenes_ids_for_module[module_id]);
												
												if(this.selected_scenes_ids_for_module[module_id].indexOf(this.module_with_scenes[i].scenes[j].scene_id)!=-1)
													this.selected_scenes_ids_for_module[module_id].splice(this.selected_scenes_ids_for_module[module_id].indexOf(this.module_with_scenes[i].scenes[j].scene_id), 1);

												console.log(this.selected_scenes_ids_for_module[module_id]);
											}
										}
								}
						}
				}
			this.checkCanAssignStepTwo();   	
		}

	checkCanAssign()
		{
			if(this.selected_user_ids.length>0 && this.team_id!='')
	       		this.canAssign=1;
	        else
	       		this.canAssign=0;	
		}

	checkCanAssignStepTwo()
		{			
			if(this.selected_user_ids.length>0)
				{
					if(this.selected_scenes_ids_for_module.length>0)
						{							
							for(let i=0;i<this.selected_scenes_ids_for_module.length;i++)
								{
									
									if(typeof this.selected_scenes_ids_for_module[i]!=undefined && this.selected_scenes_ids_for_module[i]!=undefined && this.selected_scenes_ids_for_module[i].length>0)
										{
											this.canAssignStepTwo=1;
											break;
										}
									else
										{
											delete this.selected_scenes_ids_for_module[i];							
											this.canAssignStepTwo=0;
										}
								}
						}
					else
						{
							this.canAssignStepTwo=0;
						}		       		
				}
	        else
	       		this.canAssignStepTwo=0;	
		}

	removePlayer(value)
		{
			swal({
			  title: '',
			  text: 'Do you want to remove this player?',
			  type: 'warning',
			  showCancelButton: true,
			  showConfirmButton: true,
			  confirmButtonText: 'Remove',
			  cancelButtonText: 'Cancel'
			}).then((result) => {
				if(result.value==true){
					for(let i=0;i<this.all_invited_players.length;i++)
						{
							if(this.all_invited_players[i].id==value)
								{
									this.all_invited_players[i].selected=false;
								}
						}
					this.selectedAll=false;
			  		this.selected_user_ids.splice(this.selected_user_ids.indexOf(value), 1);
			  		if(this.selected_user_ids.length<1)
			  			this.canAssignStepTwo=0;
				}
			});			
		}
	assignPlayers()
		{
			var selected_scenes_to_send={};
			for(let i=0;i<this.selected_scenes_ids_for_module.length;i++)
				{
					if(typeof this.selected_scenes_ids_for_module[i]!=undefined && this.selected_scenes_ids_for_module[i]!=undefined && this.selected_scenes_ids_for_module[i].length>0)
						{
							selected_scenes_to_send[i]=this.selected_scenes_ids_for_module[i];
						}
				}

			if(this.selected_user_ids.length>0){                
                this._services.showAlert("Processing...",false,false); 
                // Show popup on assigning               
                let payload={coach_id:this.user_id,users:this.selected_user_ids,scenes:selected_scenes_to_send};  

                console.log(payload);
                this._services.assignPlayersToScenes("coach_player_scene_assignments",payload).subscribe(
                  response => { 
                  	this._services.hideAlert();     
                  	this._services.showAlert(response.message,true,false);     

                  	this.divToDisplay=1;      
                  	this.resetData();    

                  },
                  error => {
                      console.log(error);
                  		this._services.showAlert("Something went wrong.",true,false);
                  });    
                }           
		}

	viewDetails(scene)
		{
			this.current_scene=scene;
			this.showScenePopup=1;
		}

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
}

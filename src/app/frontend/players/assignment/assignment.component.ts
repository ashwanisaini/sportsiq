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
import * as ngCore from '@angular/core';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./assignment.component.scss'],
  templateUrl: './assignment.component.html',
})
export class PlayerAssignmentComponent {
public search_query:any;
public all_invited_players:any;
public user_id:any;
public module_with_scenes:any;
public image_source:string;
public divToDisplay:any; // 0: Display assigned modules, 1: Display Quiz iFrame
public game_content_url:any;

	constructor(private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router,private renderer: Renderer2) {
		this.image_source=Constants.API_ENDPOINT+'containers';
		this.game_content_url=Constants.GAME_CONTENT_URL;
		localStorage.setItem('assign_module_id','');
		console.log(this.game_content_url);
		console.log("ABCD");
			  this.user_id=localStorage.getItem('user_id');	 
			  this.divToDisplay=0; 
			  this.getAssigned();
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

	

	public getAssigned()
		{
			this._services.showAlert("Getting Assigned Modules and Scenes...");
			this.module_with_scenes=new Array;
	          // Get Modules with scenes by Sport ID
	          this._services.getAssignedModulesWithScenesOfPlayers('modules',this.user_id).subscribe(
		        module_with_scenes => {	
		       
		        	this._services.hideAlert(); 		        	              
		          	
		          	
		          	if(module_with_scenes.length)
		          		{	
		          			this.module_with_scenes=module_with_scenes;	
		          			for(let i=0;i<module_with_scenes.length;i++)
		          				{
		          					let is_category_complete=0;
		          					let total_scene_complete_count=0;
		          					if(module_with_scenes[i].scenes.length)
		          						{
		          							let scenes_array=new Array;
		          							for(let j=0;j<module_with_scenes[i].scenes.length;j++)
			          							{
			          								module_with_scenes[i].scenes[j].selected=false;
			          								scenes_array.push(module_with_scenes[i].scenes[j]); 

			          								if(module_with_scenes[i].scenes[j].is_complete==2)
				          								{
				          									total_scene_complete_count++;
				          								}

			          							}	
			          						if(total_scene_complete_count==module_with_scenes[i].scenes.length)		  
			          							{
			          								is_category_complete=1;
			          							}        						
		          						} 
		          					module_with_scenes[i]['is_complete']=is_category_complete;
		          				}		          			
		          		}
		          	console.log(module_with_scenes);
		          	this.ngOnInit();
		        },
		        error => {
		        	console.log(error);
		        	this._services.showAlert("There was some error fetching the Modules and Scenes of Sport, Please try again later.",true);
		        }); 

	       
		}

	// Function to show quiz on Start button click 
	startQuiz(module_id,retake=0)
		{
			localStorage.setItem('assign_module_id',module_id);
			
			this._services.showAlert("Starting quiz...");
			this._services.getLatestRetakeValue("users",{"player_id":this.user_id,"module_id":module_id}).subscribe(
	              response => {
	              	this._services.hideAlert();
	              	if(response.length>0 && typeof response[0].retake!=undefined && response[0].retake!=undefined)
	              		localStorage.setItem('retake',response[0].retake);
	              	else
	              		localStorage.setItem('retake','0');
	              },
	              error => {
	                  console.log(error);   
	                  this._services.showAlert('There is some error to start this quiz, please try again later.',true,true);              
	              }
	          ); 


			this.divToDisplay=1;
		}

	// Function to Re-start all the modules of a category
	restartQuiz(module_id)
		{	
			swal({
			  title: 'Are you sure, you want to re-take this assignment?',
			  text: "All the previous data will be deleted for this category",
			  type: 'warning',
			  showCancelButton: true,
			  showConfirmButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Re-take'
			}).then((result) => {
			  if (result.value) {
			  	this._services.showAlert("Please wait...");
			    	this._services.retakeAssignment("users",{"player_id":this.user_id,"module_id":module_id}).subscribe(
			              response => {
			              	this._services.hideAlert();
			              	if(response.length>0 && typeof response[0].retake!=undefined && response[0].retake!=undefined)
			              		localStorage.setItem('retake',response[0].retake);
			              	else
			              		localStorage.setItem('retake','0');

			              	this.startQuiz(module_id,1);
			              },
			              error => {
			                  console.log(error);   
			                  this._services.showAlert('There is some error to Re-take this quiz, please try again later.',true,true);              
			              }
			          );  
			  	}
			});
		}
}

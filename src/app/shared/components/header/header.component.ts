import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AdminServices} from '../../../services/admin.services';
import {AuthServices} from '../../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import * as Constants from '../../../services/constants';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {  
  
	public user:any;
  	public user_id:any;
  	public token:string;
  	public isUserLoggedIn:any;
  	public user_role:any;
  	public forgot_email:any;
  	public isForgot:number;
  	public remember:any;
  	public user_data:any;
  	public logo:any;
  	public username:any;
  	public minDate:any;

	constructor( private formBuilder: FormBuilder, public http: Http,private route: ActivatedRoute,private router: Router,private _services:AdminServices,private _auth_services:AuthServices)
		{
			this.isForgot=0;
			this.user_id='';
		    this.token='';
		    this.user_role=localStorage.getItem('user_role');
		    this.username=localStorage.getItem('first_name')+' '+localStorage.getItem('last_name');
			this.user = this.formBuilder.group({
		      email: ['', Validators.required],
		      password: ['', Validators.required],
		    });
		    
		    if(localStorage.getItem('user_id'))
		    	this.isUserLoggedIn=1;
		   	else
		   		this.isUserLoggedIn=0;

		   	if(localStorage.getItem('remember'))
		   		{
		   			this.user.email=localStorage.getItem('email');
		   			this.user.password=localStorage.getItem('password');
		   			this.remember=1;
		   		}
		   	else
		   		this.remember=0;


		   	/* Get User Details For Header */
		   	if(this.isUserLoggedIn==1 &&  (localStorage.getItem('user_role')=='2' || localStorage.getItem('user_role')=='3') )
		   		{		   			
		   			// GET USER DETAILS 
		   			this._services.getTableData('users',{"where":{id:localStorage.getItem('user_id')}}).subscribe(
					            response => {

					            	localStorage.setItem('first_name',response[0].first_name);
					            	localStorage.setItem('last_name',response[0].last_name);
					            	this.username=localStorage.getItem('first_name')+' '+localStorage.getItem('last_name');
					            },
					            error => {
					                console.log(error);
					                
					            }
					        );     

		   			if(localStorage.getItem('user_role')=='2')
		   				{
		   					this._services.getTableData('user_details',{"where":{meta_key:"coach_logo",user_id:localStorage.getItem('user_id')}}).subscribe(
					            response => {
					            	if(typeof response[0]!=undefined && response[0]!=undefined && response[0].meta_value!='')
						            	{
						            		this.logo=Constants.API_ENDPOINT+'containers/coaches/download/'+response[0].meta_value;
						            		console.log(this.logo);
						            	}
					            },
					            error => {
					                console.log(error);
					                
					            }
					        );     
		   				}
		   			else if(localStorage.getItem('user_role')=='3')
		   				{ 
		   					this._services.getTableData('user_details',{"where":{meta_key:"player_logo",user_id:localStorage.getItem('user_id')}}).subscribe(
					            response => {
					            	if(typeof response[0]!=undefined && response[0]!=undefined && response[0].meta_value!='')
						            	{
						            		this.logo=Constants.API_ENDPOINT+'containers/players/download/'+response[0].meta_value;
						            	}
					            },
					            error => {
					                console.log(error);
					                
					            }
					        );     
		   				}	
		   			
		   		}
		   	else
		   		{
		   			if(this.isUserLoggedIn==1)
		   				this.logoutUser();
		   		}

		}
		
	ngAfterViewInit()
		{
			if(localStorage.getItem('user_id'))
		    	this.isUserLoggedIn=1;
		   	else
		   		this.isUserLoggedIn=0;

		   	this.isForgot=0;
		   	this.runJquery();
		}
	ngAfterContentChecked()
		{
			$(".closepopup").click(function() {
					console.log("Here");
					 $('.popup').removeClass('vv');
				    $('.modal-wrap').removeClass('vv');
				});

		}

	 public runJquery()
	   	{
	   		$(document).ready(function() {		  

			  	$('.login-btn-link , #slide, #closeNav, .closepopup, .reg-btn-link ').click(function(){
			 	 $('#menu').animate({
			            'right' : $('#menu').css('right') == '-250px' ? '0' : '-250px'
			        }, 200);
			 	});
			  	$(".userNav li a").click(function(){
			      	$('.userNav').slideToggle()
			      });
				$(".userLog-col h5").click(function(e) {
				    $(".userNav").slideToggle();
				    e.stopPropagation();
				});

				$(document).click(function(e) {
				    if (!$(e.target).is('.userNav, .userNav *')) {
				        $(".userNav").slideUp();
				    }
				});
			
				$('.modal-wrap').click(function() {
				    $('.popup').removeClass('vv');
				    $(this).removeClass('vv');
				});

				$(".login-btn-link").click(function() {
					
				    $('.modal-wrap').addClass('vv');
				    $('#' + $(this).data('modal')).addClass('vv');

				    var hgt2 = $('#' +  $(this).data('modal')).find('.loginHead').innerHeight()
				    var hgt1 = $('#' +  $(this).data('modal')).find('.modalList ').innerHeight()
				    var mainH = hgt1 + hgt2 + 5;
				    // alert(hgt1 + ' ---' + hgt2);
				    $('#' +  $(this).data('modal')).css('height', mainH);
				});

				
			});

	   	}


	public login() {    
        var payload = {email: this.user.email,password: this.user.password};         
        // Show popup on adding

        if(this.user.email!='' && this.user.password!='')
       		{
	   			  swal.setDefaults({showConfirmButton: false,allowOutsideClick:false});
		          swal('Logging in...');        
					this._auth_services.login(payload).subscribe(
			            response => {       
			                swal.close();
				            swal.setDefaults({showConfirmButton: true});
				            
				            if(typeof response.userId!=undefined && response.userId!=undefined && typeof response.id!=undefined && response.id!=undefined)
				              {              
					                
				              		localStorage.setItem('user_id',response.userId);
								    localStorage.setItem('access_token',response.id);
								    
					                // GET USER ROLE BY ID

					                this._services.getTableData('users',{"where":{"id":response.userId}}).subscribe(
						            response => {
						            	console.log(response[0]);
						            	
						            	if (response[0].role!=2 && response[0].role!=3) 
							            	{
							            		swal.setDefaults({showConfirmButton: true});
							            		swal("Invalid Login.");
							            		this.logoutUser();
							            	}
							            else if(response[0].is_active!=1)
							            	{
							            		swal.setDefaults({showConfirmButton: true});
							            		swal("Your account is not active, please contact to admin.");
							            		swal({
												  title: 'Your account is not active.',
												  text: "",
												  type: 'warning',
												  showCancelButton: false,
												  showConfirmButton: true,
												  confirmButtonColor: '#3085d6',
												  confirmButtonText: 'Ok'
												}).then((result) => {
												  if (result.value) {
												    	this.logoutUser();
												  	}
												});
							            		
							            	}
						            	else
							            	{
							            		
								                this.isUserLoggedIn=1;	
								            	this.user_data=response[0];
								            	localStorage.setItem('uemail',this.user_data.email);
								            	localStorage.setItem('is_paid',this.user_data.is_paid);
								            	localStorage.setItem('is_active',this.user_data.is_active);
								            	localStorage.setItem('first_name',this.user_data.first_name);
								            	localStorage.setItem('last_name',this.user_data.last_name);
								            	if(this.remember)
								            		{
								            			localStorage.setItem('remember',this.remember);
								            			localStorage.setItem('email',this.user.email);
								            			localStorage.setItem('password',this.user.password);
								            			
								            		} 
								            	else
								            		{
								            			localStorage.setItem('remember','');
								            			localStorage.setItem('email','');
								            			localStorage.setItem('password','');
								            		}
								            	this.user_role=this.user_data.role;
								            	localStorage.setItem('user_role',this.user_data.role);     
								            	//alert(typeof response[0].role);
								            	//if(this.user_data.is_paid==1)
								            	if(this.user_data.is_paid==1)
								            		{
										            	if(this.user_data.role==2)
											            	{
											            		this.router.navigate(['frontend/coach/dashboard']);
											            		//window.location.reload();   
											            	}
										            	else if(this.user_data.role==3)
											            	{
											            		this.router.navigate(['frontend/player/dashboard']);
											            		//window.location.reload();                 
											            	}
											        }
											    else
											    	this.router.navigate(['frontend/payment']);

						                  		let timeoutId = setTimeout(() => {  
													 window.location.reload();      
													}, 1000);
						                  		//clearTimeout(timeoutId);

					                  		}
						            },
						            error => {
						                console.log(error);
						                
						            }
						        );     
					      

				                  
				              }
			            },
			            error => {
			                console.log(error);
			                swal.setDefaults({showConfirmButton: true});
			            	swal('Login Failed', 'Please enter correct Username and Password', 'error')
			            }
			        ); 				
       		}
        else
       		{
       			swal('Error', 'Please fill Username and Password', 'error')
       		}  
    }

    public logoutUser()
	    {
	    	console.log(localStorage.getItem('access_token'));
	      this._services.deleteTableData('AccessTokens',localStorage.getItem('access_token')).subscribe(
	            response => {       
	                localStorage.removeItem('user_id');
	                localStorage.removeItem('user_role');
	                localStorage.removeItem('access_token');
	                localStorage.removeItem('sport_id');
	                localStorage.removeItem('age_group_id');
	                localStorage.removeItem('first_name');
	                localStorage.removeItem('last_name');
	                localStorage.removeItem('uemail');
	                localStorage.removeItem('is_paid');
					localStorage.removeItem('is_active');
					localStorage.removeItem('retake');
	                this.router.navigate(['/home']);
	                window.location.reload();  
	            },
	            error => {
	                console.log(error);
	                
	            }
	        );     
	      
	    }
 
 	public forgotPassword()
 		{
 			this.isForgot=1;
 		}
 	public cancelForgotPassword()
 		{
 			this.isForgot=0;
 		}
 	public rememberMe(rem)
 		{
 			this.remember=rem;
 		}
 	public reloadPage()
 		{
 			let timeoutId = setTimeout(() => {  
			 window.location.reload()
			}, 1000);
 		}

 	public resetPasswordEmail()
 		{
 			if(this.forgot_email!='')
 				{
 					this._services.showAlert("Please wait...");
 					this._services.resetPasswordEmail('users',{email:this.forgot_email}).subscribe(
 						response => {
 							this._services.hideAlert();
 								this._services.showAlert('The reset email has been sent, please check your inbox for further instructions.',true,true);
 								this.forgot_email='';
 							},
 						error => {
 							console.log(error);
 							if(error.status==404)
 								{
 									this._services.showAlert('Email not found.',true,true);
 								}
 							else
 								{
 									this._services.showAlert('The reset email could not be sent, please try again later.',true,true);
 								}
 							}
 					);
 				}
 			else
 				{
 					this._services.showAlert('Please enter email id.',true,true);
 				}
 		}

}

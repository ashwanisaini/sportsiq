import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnDestroy, Renderer2, Inject,Directive } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../../services/admin.services';
import {AuthServices} from '../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader,FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

import * as Constants from '../../services/constants';
declare var jquery:any;
declare var $ :any;
import * as ngCore from '@angular/core';
import * as braintree from 'braintree-web';
declare var braintree: any;
const now = new Date();
			 
@Component({
  selector: 'register',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
 	public script: any;
 	public step:number;
    public user_id:any;
    public isClicked:number;    
    public amount:any;
    public submitClicked:number;
   

	/* Braintree Code */

	@Input() clientTokenURL: string;
	@Input() createPurchaseURL: string;
	@Output() paymentStatus: EventEmitter<any> = new EventEmitter<any>();
	clientToken: string;
	showDropinUI = true;
	clientTokenNotReceived = false;
	interval: any;
	instance: any;
	@Input() buttonText = 'Buy';

	
	constructor( private formBuilder: FormBuilder, public http: Http,private _services:AdminServices,private _auth_services:AuthServices,private route: ActivatedRoute,private router: Router,private modalService: NgbModal,private renderer: Renderer2, @Inject(DOCUMENT) private document: any)
			{
				if (!localStorage.getItem('user_id') && !localStorage.getItem('access_token')) {
		            this.router.navigate(['register']);	
		        }  
		        else if (localStorage.getItem('user_id') && localStorage.getItem('access_token') && localStorage.getItem('is_paid')=="1") {
            			this.redirectUser();
       		 		} 	
		        this.user_id=localStorage.getItem('user_id');	        
		        this.step=1;
		        this.amount=Constants.COACH_REGISTRATION_PRICE;			

			}		

	ngAfterViewChecked()
		{
			
		}
	ngAfterViewInit()
		{
			
		}



	ngOnInit() {
		
	 	this.script = this.renderer.createElement('script');
	    this.script.type = 'text/javascript';
	    this.script.src = 'https://js.braintreegateway.com/web/dropin/1.8.0/js/dropin.min.js';
	    this.renderer.appendChild(this.document.body, this.script);
	    this._services
	        .getClientToken('users',{})
	        .subscribe((clientToken: string) => {	        	
	            this.clientToken = clientToken;
	            this.clientTokenNotReceived = false;	            
	        }, (error) => {
	            this.clientTokenNotReceived = true;
	            console.log('Client token not received. Please make sure your braintree server api is configured properly, running and accessible.');
	        });
    }

    redirectUser()
    	{
    		if(localStorage.getItem('user_role')=="2")
            	{
            		this.router.navigate(['frontend/coach/dashboard']);
            		//window.location.reload();   
            	}
        	else if(localStorage.getItem('user_role')=="3")
            	{
            		this.router.navigate(['frontend/player/dashboard']);
            		//window.location.reload();                 
            	}
    	}

	createDropin() {
		console.log(typeof braintree);
	    if (typeof braintree !== 'undefined') {
	        braintree.dropin.create({
	        authorization: this.clientToken,
	        container: '#dropin-container'
	    }, (createErr, instance) => {
	    	console.log(instance);
	    	console.log(createErr);
	        this.instance = instance;
	    });
	        clearInterval(this.interval);
	    }
	}


	
	pay() 
		{			
		    if (this.instance) {		    	
		        this.instance.requestPaymentMethod((err, payload) => {
		        
		        if(!err){
		        this._services.showAlert("Processing...",false,false);
		        this.showDropinUI = false;
		        this.isClicked=1;
		        this._services
		            .makePayment('users', {amount:(this.amount),payment_method_nonce:payload.nonce,user_id:this.user_id})
		            .subscribe(	                
		                response => { 
		                	this.clientToken = '';
		              	
		                	this.paymentStatus.emit(response);	
			    			
			    			this._services.updateIsPaid('users/updateIsPaid',{is_paid:1,id:this.user_id}).subscribe(
			    				response=>{
			    					this._services.hideAlert();
			    					this._services.showAlert("Payment has been made successfully",true,true);
			    					localStorage.setItem('is_paid','1');
			    					this.redirectUser();
			    				},
			    				error=>{
			    						this._services.showAlert("Payment could not be done, Try again later",true,true);
			    					}
			    				);
			    			
		                },	
		                error => {
		                	swal.close();
		                    swal.setDefaults({showConfirmButton: true});
			    			swal(JSON.stringify(error.message));
			    			
		                	           
		        		});
		    		}
		    	});

			}   
		}
	
	showPaymentForm()
		{
			this.step=2;	
			this.createDropin();			
		}

	}

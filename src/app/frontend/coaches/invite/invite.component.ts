import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    OnDestroy,
    Renderer2,
    Inject,
    Directive
} from '@angular/core';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import {DOCUMENT} from '@angular/platform-browser';
import {AdminServices} from '../../../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import * as braintree from 'braintree-web';
declare let braintree: any;

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./invite.component.scss'],
  templateUrl: './invite.component.html',
})
export class InviteComponent {
public age_groups: any;
public coach_players:any;
public user_id:any;
public username:any;
public team_id:any;
public teams:any;
public sport_id:any;
public amount: any;
public step:any; // 1: Display add players form, 2: Display payment details page, 3: Display credit card payment form
public script: any;
  
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

	constructor(public http: Http,private _services:AdminServices,private route: ActivatedRoute,private router: Router, private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {
	   
	  }

  ngOnInit()
    {
       this.user_id=localStorage.getItem('user_id');
       this.username=localStorage.getItem('first_name')+' '+localStorage.getItem('last_name');
       this.coach_players=[{'coach_player_first_name':'','coach_player_last_name':'','coach_player_email':''}];
       this.team_id=this.route.snapshot.params['team_id'];
       this.step=1;
         
        // Get Team list of current coach by coach ID
        this._services.getTableData('teams',{"where":{"user_id":this.user_id}}).subscribe(
            response => {
              console.log(response);
              this.teams=response;
            },
           error => {

            });
        
        // Get Current User Sport ID
        this._services.getTableData('user_details',{"where":{meta_key:"sport",user_id:this.user_id}}).subscribe(
            response => {
              if(typeof response[0]!=undefined && response[0]!=undefined && response[0].meta_value!='')
                {
                  this.sport_id=response[0].meta_value;                            
                }
            },
            error => {
                console.log(error);
                
            }
        );     

      this.script = this.renderer.createElement('script');
      this.script.type = 'text/javascript';
      this.script.src = 'https://js.braintreegateway.com/web/dropin/1.8.0/js/dropin.min.js';
      this.renderer.appendChild(this.document.body, this.script);
      this._services
          .getClientToken('users', {})
          .subscribe((clientToken: string) => {
              this.clientToken = clientToken;
              this.clientTokenNotReceived = false;
          }, (error) => {
              this.clientTokenNotReceived = true;
              console.log('Client token not received. Please make sure your braintree server api is configured properly, running and accessible.');
          });
        
    }

	public addMorePlayer()
	    {
	      this.coach_players.push({'coach_player_first_name':'','coach_player_last_name':'','coach_player_email':''});
	    }
  	public removePlayer(index)
	    {
	      this.coach_players.splice(index, 1);
	    }

	public addPlayerForCoach()
		{
      let user_details_full_filled=1;
			if(this.coach_players.length>0){
          for(let i=0;i<this.coach_players.length;i++)
             {
               if(this.coach_players[i].coach_player_email.trim()=='' || this.coach_players[i].coach_player_first_name.trim()=='' || this.coach_players[i].coach_player_last_name.trim()=='')
                 user_details_full_filled=0;
             }
          if(user_details_full_filled==1)
            this.step=2;
          else
            {
              this._services.showAlert("Please enter all the details",true,true);
            }
        }             
      else
        {
          this._services.showAlert("Please add atleast one player to send invite.",true,true);
        } 
		}

  showPaymentForm() {
        this.step = 3;
        this.createDropin();
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


    pay() {
        if (this.instance) {
            this.instance.requestPaymentMethod((err, payload) => {

                if (!err) {
                    swal("Processing payment...");
                    this.showDropinUI = false;
                    this._services
                        .makePayment('users', {
                            amount: (this.coach_players.length * 10),
                            payment_method_nonce: payload.nonce,
                            user_id: this.user_id
                        })
                        .subscribe(
                            response => {
                                this.clientToken = '';
                                this.paymentStatus.emit(response);
                                this.addPlayerForCoachData();
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

  public addPlayerForCoachData()
    {
      this._services.showAlert('Sending invitations...',false,false);  
        // Show popup on adding               
        let payload={invited_by:this.user_id,players:this.coach_players,invitor_name:this.username,team_id:this.team_id,sport_id:this.sport_id};  
        this._services.addCoachPlayers("users",payload).subscribe(
          response => { 
            this._services.hideAlert();
            this.coach_players=[{'coach_player_first_name':'','coach_player_last_name':'','coach_player_email':''}];   
            swal.setDefaults({showConfirmButton: true,allowOutsideClick:false});
            swal('Invitations sent successfully.');   
            this.step=1;
          },
          error => {                      

              if(typeof error._body=='string')
                {
                  error=JSON.parse(error._body);
                  error=error.error;
                }
              
              swal.setDefaults({showConfirmButton: true,allowOutsideClick:false});
              if(typeof error.message!=undefined && error.message!=undefined)
                swal(error.message);
              else
                swal('Oops...', 'Something went wrong!', 'error');

              
          });    
    }

}

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
import {DOCUMENT} from '@angular/platform-browser';
import {Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {AdminServices} from '../services/admin.services';
import {AuthServices} from '../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FileUploader, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';

import * as Constants from '../services/constants';

declare let jquery: any;
declare let $: any;
import * as braintree from 'braintree-web';

declare let braintree: any;
const now = new Date();

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    public script: any;
    public step: number;
    public sports: any;
    public levels: any;
    public states: any;
    public cities: any;
    public age_groups: any;
    public role: number;
    public user_id: number;
    public isClicked: number;
    public login_email: any;
    public login_password: any;
    public registered_user: any;
    public amount: any;
    public submitClicked: number;
    public coach_image_url: any;
    public coach_team_image_url: any;
    public player_image_url: any;
    public show_parent: any;
    public coach_name: any;
    public accesstoken: any;
    public datepicker: any;
    public minDate: any;

    // Coach's Details
    public coach_first_name: any;
    public coach_last_name: any;
    public coach_gender: any;
    public coach_level: any;
    public coach_sport: any;
    public coach_club: any;
    public coach_team_name: any;
    public coach_age_of_team: any;
    public coach_address: any;
    public coach_address2: any;
    public coach_state: any;
    public coach_city: any;
    public coach_zipcode: any;
    public coach_phone_number: any;
    public coach_email: any;
    public coach_password: any;
    public coach_confirm_password: any;
    public coach_logo: any;
    public coach_team_logo: any;
    public payment_option: any;
    public payment_option_selected: any;
    public coach_players: any;
    public team_id: any;
    public sport_id: any;
    public coach_logo_uploader: FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT + "containers/coaches/upload"
    });
    public coach_team_uploader: FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT + "containers/coaches/upload"
    });

    // Player's Details

    public player_first_name: any;
    public player_last_name: any;
    public player_age: any;
    public player_coach_name: any;
    public player_sport: any;
    public player_club: any;
    public player_team_name: any;
    public player_address: any;
    public player_state: any;
    public player_city: any;
    public player_gender: any;
    public player_zipcode: any;
    public player_phone_number: any;
    public player_parent_one_name: any;
    public player_parent_one_phone: any;
    public player_parent_one_email: any;
    public player_parent_two_name: any;
    public player_parent_two_phone: any;
    public player_parent_two_email: any;

    public player_email: any;
    public player_password: any;
    public player_confirm_password: any;
    public player_logo: any;
    public disable_pre_filled_properties: any;
    public invitor_id: any;

    public player_uploader: FileUploader = new FileUploader({
        url: Constants.API_ENDPOINT + "containers/players/upload"
    });


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


    constructor(private formBuilder: FormBuilder, public http: Http, private _services: AdminServices, private _auth_services: AuthServices, private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {
        if (localStorage.getItem('user_id') && localStorage.getItem('access_token')) {
            if (localStorage.getItem('user_role') == '2')
                this.router.navigate(['frontend/coach/dashboard']);
            else if (localStorage.getItem('user_role') == '3')
                this.router.navigate(['frontend/player/dashboard']);
        }

        this.step = 1;
        this.disable_pre_filled_properties = 0;
        this.invitor_id = '';
        // Check if user is coming from invitation URL

        this.accesstoken = this.route.snapshot.params['accesstoken'];
        if (typeof this.accesstoken != undefined && typeof this.accesstoken != "undefined" && this.accesstoken != undefined && this.accesstoken != "undefined") {
            this.disable_pre_filled_properties = 1;
            let requested_object: any;
            requested_object = JSON.parse(atob(this.accesstoken));
            console.log(requested_object);
            this.registerAs(3);
            this.player_email = requested_object.email;
            this.invitor_id = requested_object.invitor_id;
            // Get Team name by Team ID
            this._services.getTableData('teams', {"where": {"id": requested_object.team_id}}).subscribe(
                response => {
                    if (typeof response[0] != undefined && response[0] != undefined)
                        this.player_team_name = response[0].team_name;
                },
                error => {

                });

            // Get Team name by Team ID
            this._services.getTableData('users', {"where": {"id": requested_object.invitor_id}}).subscribe(
                response => {
                    if (typeof response[0] != undefined && response[0] != undefined)
                        this.player_coach_name = response[0].first_name + ' ' + response[0].last_name;
                },
                error => {

                });

            // Get Sport ID of current coach by coach ID
            this._services.getTableData('user_details', {
                "where": {
                    "meta_key": "sport",
                    "user_id": requested_object.invitor_id
                }
            }).subscribe(
                response => {
                    if (typeof response[0] != undefined && response[0] != undefined)
                        this.player_sport = response[0].meta_value;
                },
                error => {

                });

            // Get Club Name of current coach by coach ID
            this._services.getTableData('user_details', {
                "where": {
                    "meta_key": "club",
                    "user_id": requested_object.invitor_id
                }
            }).subscribe(
                response => {
                    if (typeof response[0] != undefined && response[0] != undefined)
                        this.player_club = response[0].meta_value;
                },
                error => {

                });
        }


        this.coach_players = [];
        this.payment_option = 0;
        this.show_parent = 1;
        this.submitClicked = 0;

        this.coach_image_url = '../assets/images/place_image.png';
        this.coach_team_image_url = '../assets/images/place_image.png';
        this.player_image_url = '../assets/images/place_image.png';
        //this.levels=[1,2,3,4,5,6,7,8,9,10];
        this.states = ['New York', 'California', 'Texas', 'Alaska', 'Mexico', 'Nevada', 'Honolulu'];
        this.cities = ['Chicago', 'Phoenix', 'San Diego', '	Pearland', 'Richardson', 'Gresham', 'Palm Bay', 'Richmond'];
        this.coach_logo = '';
        this.coach_team_logo = '';
        this.amount = Constants.COACH_REGISTRATION_PRICE;
        this._services.getTableData("sports", {"where": {"is_active": 1}}).subscribe(
            response => {
                this.sports = response;
            },
            error => {
                console.log(error);
                //this.alertMessage = 'error in response';
            }
        );

        // Code for generating drop down of Age of Team
        this.age_groups = [];
        let current_date = new Date();
        let current_year = current_date.getFullYear();
        for (let i = current_year; i > (current_year - 22); i--) {
            if ((current_year - i) == 20) {
                this.age_groups.push({id: i, val: 'High School Age'});
            }
            else if ((current_year - i) == 21) {
                this.age_groups.push({id: i, val: 'College Age'});
            }
            else if ((current_year - i) > 5) {
                this.age_groups.push({id: i, val: i + ' (Under ' + (current_year - i) + ')'});
            }
        }

        /*this._services.getTableData("age_groups",{"where":{"is_active":1}}).subscribe(
              response => {
                this.age_groups=response;
              },
              error => {
                  console.log(error);
                  //this.alertMessage = 'error in response';
              }
          );*/

        this._services.getTableData("formation_groups", {"where": {"is_active": 1}}).subscribe(
            response => {
                this.levels = response;
            },
            error => {
                console.log(error);
                //this.alertMessage = 'error in response';
            }
        );

        this.coach_logo_uploader.onErrorItem = (item, response, status, headers) => this.onErrorCoachLogo(item, response, status, headers);
        this.coach_logo_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessCoachLogo(item, response, status, headers);

        this.coach_team_uploader.onErrorItem = (item, response, status, headers) => this.onErrorTeamLogo(item, response, status, headers);
        this.coach_team_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessTeamLogo(item, response, status, headers);

        this.player_uploader.onErrorItem = (item, response, status, headers) => this.onErrorPlayerLogo(item, response, status, headers);
        this.player_uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessPlayerLogo(item, response, status, headers);


    }

    ngAfterViewChecked() {

    }

    ngAfterViewInit() {

    }


    ngOnInit() {

        this.script = this.renderer.createElement('script');
        this.script.type = 'text/javascript';
        this.script.src = 'https://js.braintreegateway.com/web/dropin/1.8.0/js/dropin.min.js';
        this.renderer.appendChild(this.document.body, this.script);
        this.minDate = {year: 1950, month: 1, day: 1};
        this.datepicker = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
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


    public showPassword() {
        if ($("#show_password").text() == 'SHOW') {
            $("#show_password").text('HIDE');
            $("#password").attr('type', 'text');
        }
        else {
            $("#show_password").text('SHOW');
            $("#password").attr('type', 'password');
        }
    }

    public showParents(player_age) {
        if (player_age < 18)
            this.show_parent = 1;
        else
            this.show_parent = 0;
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
                    swal("Processing...");
                    this.showDropinUI = false;
                    this.isClicked = 1;
                    this._services
                        .makePayment('users', {
                            amount: (this.amount + this.coach_players.length * 10),
                            payment_method_nonce: payload.nonce,
                            user_id: this.user_id
                        })
                        .subscribe(
                            response => {
                                this.clientToken = '';

                                this.paymentStatus.emit(response);

                                this._services.updateIsPaid('users/updateIsPaid', {
                                    is_paid: 1,
                                    id: this.user_id
                                }).subscribe(
                                    response => {
                                        localStorage.setItem('is_paid','1');
                                        localStorage.setItem('is_active','1');
                                        this.autoLogin({email: this.login_email, password: this.login_password});
                                    },
                                    error => {
                                        this.autoLogin({email: this.login_email, password: this.login_password});
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


    // Auto Login after registration
    autoLogin(payload) {
        this._auth_services.login(payload).subscribe(
            response => {
                swal.close();
                swal.setDefaults({showConfirmButton: true});

                if (typeof response.userId != undefined && response.userId != undefined && typeof response.id != undefined && response.id != undefined) {
                    localStorage.setItem('user_id', response.userId);
                    localStorage.setItem('access_token', response.id);
                    localStorage.setItem('email',payload.email);
                    localStorage.setItem('uemail',payload.email);
                    localStorage.setItem('user_role','3');
                    this._services.getTableData('users', {"where": {id: response.userId}}).subscribe(
                        response => {

                            if (typeof response[0].id != undefined && response[0].id != undefined) {
                                localStorage.setItem('user_role', response[0].role);
                                localStorage.setItem('first_name', response[0].first_name);
                                localStorage.setItem('last_name', response[0].last_name);
                                if (response[0].role == 2)
                                    this.router.navigate(['frontend/coach/dashboard']);
                                else if (response[0].role == 3)
                                    this.router.navigate(['frontend/player/dashboard']);

                                window.location.reload();
                            }
                        },
                        error => {
                        }
                    );


                }
            },
            error => {
                console.log(error);
                //swal.setDefaults({showConfirmButton: true});
                //swal('Login Failed', 'Please enter correct Username and Password', 'error')
            }
        );
    }

    // Checks which form is to be displayed
    goToStartPage() {
        this.step = 1;
    }

    registerAs(role) // 2: Coach, 3: Player
    {
        this.step = role;
        this.role = role;
    }

    public editDetails() {
        this.step = this.role;
    }

    selectGender(g) {
        this.coach_gender = g;
        this.player_gender = g;
    }

    registerCoach() // 2: Coach, 3: Player
    {
        swal.setDefaults({showCloseButton: true, allowOutsideClick: true});
        if (!this.coach_gender)
            swal("Please select gender");
        else if (this.coach_password != this.coach_confirm_password) {
            swal('Password and Confirm Passowrd do not match.');
        }
        else if (this.payment_option == 0) {

            swal('Please select payment option.');
        }
        else {
            swal.setDefaults({showCloseButton: false, allowOutsideClick: false});
            this.submitClicked = 1;
            this.fileUploadChangeCoach();
        }
    }

    registerPlayer() // 2: Coach, 3: Player
        {
            swal.setDefaults({showCloseButton: true, allowOutsideClick: true});
            if (!this.player_gender) {
                swal("Please select gender");
            }
            else if (this.player_password != this.player_confirm_password) {
                swal('Password and Confirm Passowrd do not match.');
            }
            else {
                swal.setDefaults({showCloseButton: false, allowOutsideClick: false});
                this.submitClicked = 1;
                this.fileUploadChangePlayer();
            }
        }

    showPaymentForm() {
        this.step = 5;
        this.createDropin();
    }

    // Register as Coach
    public registerCoachData() {
        let payload_user = {
            first_name: this.coach_first_name,
            last_name: this.coach_last_name,
            gender: this.coach_gender,
            role: 2,
            email: this.coach_email,
            password: this.coach_password,
            is_active: 1
        };


        swal.setDefaults({showConfirmButton: false, allowOutsideClick: false});
        swal('Processing...');

        this._services.addTableData("users", payload_user).subscribe(
            user_response => {
                console.log(user_response);
                if (typeof user_response.id != undefined && user_response.id != undefined && user_response.id != "undefined") {
                    this.registered_user = user_response;
                    this.login_email = this.coach_email;
                    this.login_password = this.coach_password;
                    let payload_team_details = {
                        team_name: this.coach_team_name,
                        age_of_team: this.coach_age_of_team,
                        team_logo: this.coach_team_logo,
                        user_id: user_response.id,
                        sport_id: this.coach_sport
                    };

                    this._services.addTableData("teams", payload_team_details).subscribe(
                        teams_response => {

                            console.log(teams_response);
                            if (typeof teams_response.id != undefined && teams_response.id != undefined && teams_response.id != "undefined") {
                                this.team_id = teams_response.id;
                                let payload_user_details = [{
                                    sport: this.coach_sport,
                                    level: this.coach_level,
                                    club: this.coach_club,
                                    address: this.coach_address,
                                    address2: this.coach_address2,
                                    state: this.coach_state,
                                    city: this.coach_city,
                                    zipcode: this.coach_zipcode,
                                    phone_number: this.coach_phone_number,
                                    coach_logo: this.coach_logo
                                }, {
                                    user_id: user_response.id,
                                    email: this.coach_email,
                                    name: this.coach_first_name + ' ' + this.coach_last_name
                                }];

                                this._services.addUserDetails("users", payload_user_details).subscribe(
                                    response => {
                                        swal.close();
                                        this.user_id = user_response.id
                                        // Show payment form
                                        if (this.payment_option == 2) {
                                            this.coach_players.push({
                                                'coach_player_first_name': '',
                                                'coach_player_last_name': '',
                                                'coach_player_email': ''
                                            });
                                            this.step = 6;
                                        }
                                        else {
                                            this.step = 4;
                                            this.coach_name = this.coach_first_name + ' ' + this.coach_last_name;
                                            this.coach_email = this.coach_email;
                                        }
                                    },
                                    error => {
                                        let body = JSON.parse(error._body);
                                        swal.setDefaults({showConfirmButton: true});
                                        swal('Oops...', JSON.stringify(body.error.details.messages), 'error');
                                        this.submitClicked = 0;
                                    }
                                );
                            }
                            else {
                                swal.setDefaults({showConfirmButton: true});
                                swal('', 'Something went wrong!', 'error')
                            }

                        },
                        error => {
                            let body = JSON.parse(error._body);
                            swal.setDefaults({showConfirmButton: true});
                            swal('Oops...', JSON.stringify(body.error.details.messages), 'error');
                            this.submitClicked = 0;
                        }
                    );
                }
                else {
                    swal.setDefaults({showConfirmButton: true});
                    swal('Oops...', 'Something went wrong!', 'error');
                    this.submitClicked = 0;
                }

            },
            error => {
                console.log(error);
                if (error.status == 422) {
                    let body = JSON.parse(error._body);
                    let message = '';
                    for (let key in body.error.details.messages) {
                        message += message + body.error.details.messages[key];
                    }

                    swal.setDefaults({showConfirmButton: true});
                    swal('', message, 'error');
                    this.submitClicked = 0;
                }
                else
                    this._services.showAlert('', true, true);
            }
        );
    }


    // Upload coach logo to the server
    fileUploadChangeCoach() {

        if (this.coach_logo_uploader.queue.length > 0) {
            const queueIndex = 0;// Single file upload Concept
            let file_ext = this.coach_logo_uploader.queue[queueIndex].file.name.split('.').pop();
            let file_name = Math.random().toString(36).replace('.', '') + "." + file_ext;
            this.coach_logo = file_name;
            this.coach_logo_uploader.queue[queueIndex].file.name = file_name;
            let response: any = this.coach_logo_uploader.queue[queueIndex].upload();
            this.coach_logo_uploader.queue = [];
        }
        else
            this.fileUploadChangeTeam();

    }

    // Upload coach team  to the server 
    fileUploadChangeTeam() {
        if (this.coach_team_uploader.queue.length > 0) {
            const queueIndex = 0;// Single file upload Concept
            let file_ext = this.coach_team_uploader.queue[queueIndex].file.name.split('.').pop();
            let file_name = Math.random().toString(36).replace('.', '') + "." + file_ext;
            this.coach_team_logo = file_name;
            this.coach_team_uploader.queue[queueIndex].file.name = file_name;
            let response: any = this.coach_team_uploader.queue[queueIndex].upload();
            this.coach_team_uploader.queue = [];
        }
        else {
            this.coach_team_logo = '';
            this.registerCoachData();
        }
    }


    // Register as Player
    public registerPlayerData() {
        let payload_user = {
            first_name: this.player_first_name,
            last_name: this.player_last_name,
            gender: this.player_gender,
            role: 3,
            email: this.player_email,
            password: this.player_password,
            is_active: 1,
            age: this.player_age
        };


        swal.setDefaults({showConfirmButton: false, allowOutsideClick: false});
        swal('Processing...');

        this._services.addTableData("users", payload_user).subscribe(
            user_response => {
                console.log(user_response);
                this.registered_user = user_response;
                if (typeof user_response.id != undefined && user_response.id != undefined && user_response.id != "undefined") {
                    this.login_email = this.player_email;
                    this.login_password = this.player_password;

                    let payload_user_details = [{
                        coach_name: this.player_coach_name,
                        team_name: this.player_team_name,
                        sport: this.player_sport,
                        club: this.player_club,
                        address: this.player_address,
                        state: this.player_state,
                        city: this.player_city,
                        zipcode: this.player_zipcode,
                        phone_number: this.player_phone_number,
                        player_logo: this.player_logo,
                        parent_one_name: this.player_parent_one_name,
                        parent_one_phone: this.player_parent_one_phone,
                        parent_one_email: this.player_parent_one_email,
                        parent_two_name: this.player_parent_two_name,
                        parent_two_phone: this.player_parent_two_phone,
                        parent_two_email: this.player_parent_two_email
                    }, {
                        user_id: user_response.id,
                        email: this.player_email,
                        name: this.player_first_name + ' ' + this.player_last_name,
                        invitor_id: this.invitor_id
                    }];

                    this._services.addUserDetails("users", payload_user_details).subscribe(
                        response => {
                            swal.close();
                            this.user_id = user_response.id
                            // Show payment form
                            this.step = 4;
                            this.coach_name = this.player_first_name + ' ' + this.player_last_name;
                            this.coach_email = this.player_email;
                        },
                        error => {
                            let body = JSON.parse(error._body);
                            swal.setDefaults({showConfirmButton: true});
                            swal('Oops...', JSON.stringify(body.error.details.messages), 'error');
                            this.submitClicked = 0;
                        }
                    );

                }
                else {
                    swal.setDefaults({showConfirmButton: true});
                    swal('Oops...', 'Something went wrong!', 'error');
                    this.submitClicked = 0;
                }

            },
            error => {
                if (error.status == 422) {
                    let body = JSON.parse(error._body);
                    let message = '';
                    for (let key in body.error.details.messages) {
                        message += message + body.error.details.messages[key];
                    }

                    swal.setDefaults({showConfirmButton: true});
                    swal('', message, 'error');

                }
                else
                    this._services.showAlert('', true, true);
                this.submitClicked = 0;
            }
        );
    }


    // Upload coach logo to the server
    fileUploadChangePlayer() {

        if (this.player_uploader.queue.length > 0) {
            const queueIndex = 0;// Single file upload Concept
            let file_ext = this.player_uploader.queue[queueIndex].file.name.split('.').pop();
            let file_name = Math.random().toString(36).replace('.', '') + "." + file_ext;
            this.player_logo = file_name;
            this.player_uploader.queue[queueIndex].file.name = file_name;
            let response: any = this.player_uploader.queue[queueIndex].upload();
            this.player_uploader.queue = [];
        }
        else
            this.registerPlayerData();


    }

    refreshFileList() {
        this.coach_logo_uploader.queue = [];
    }

    onSuccessCoachLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.fileUploadChangeTeam();
    }

    onErrorCoachLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        this.fileUploadChangeTeam();
    }

    onSuccessTeamLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.registerCoachData();
    }

    onErrorTeamLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        this.registerCoachData();
    }

    onSuccessPlayerLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        this.registerPlayerData();
    }

    onErrorPlayerLogo(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        this.registerPlayerData();
    }


    readCoachLogoUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                this.coach_image_url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    readCoachTeamLogoUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                this.coach_team_image_url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    readPlayerLogoUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                this.player_image_url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    public addMorePlayer() {
        this.coach_players.push({
            'coach_player_first_name': '',
            'coach_player_last_name': '',
            'coach_player_email': ''
        });
    }

    public removePlayer(index) {
        this.coach_players.splice(index, 1);
    }

    public addPlayerForCoach() {
        console.log('this.coach_players.length# ', this.coach_players.length);
        if (this.coach_players.length > 0) {
            console.log(this.coach_players);
            swal.setDefaults({showConfirmButton: false, allowOutsideClick: false});
            swal('Processing...');
            // Show popup on adding
            let payload = {
                invited_by: this.user_id,
                players: this.coach_players,
                invitor_name: this.coach_first_name + ' ' + this.coach_last_name,
                team_id: this.team_id,
                sport_id: this.coach_sport
            };
            this._services.addCoachPlayers('users', payload).subscribe(
                response => {
                    swal.close();
                    this.step = 4;
                },
                error => {
                    if (typeof error._body == 'string') {
                        error = JSON.parse(error._body);
                        error = error.error;
                    }

                    swal.setDefaults({showConfirmButton: true, allowOutsideClick: false});
                    if (typeof error.message != undefined && error.message != undefined){
                        swal(error.message);
                    }else{
                        swal('Oops...', 'Something went wrong!', 'error');
                    }
                });
        }else{
            this.step = 4;
        }

    }

    onDateChange(date) {
        console.log(date);
        this.player_age = date.year + '-' + date.month + '-' + date.day;
        let years: any;
        let d1: any;
        let d2: any;
        d1 = new Date();
        d2 = new Date(date.year + '-' + date.month + '-' + date.day);
        years = ((d1 - d2) / (24 * 60 * 60 * 1000 * 365));
        console.log(years);
        this.showParents(parseInt(years));
    }
}

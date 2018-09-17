import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AdminServices} from '../../../services/admin.services';
import {AuthServices} from '../../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
import * as Constants from '../../../services/constants';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {  	
public isUserLoggedIn:any;
public current_page:any;
	constructor( private formBuilder: FormBuilder, public http: Http,private route: ActivatedRoute,private router: Router,private _services:AdminServices,private _auth_services:AuthServices,location: Location)
		{
			if(localStorage.getItem('user_id')!='')
				this.isUserLoggedIn=1;				
			else
				this.isUserLoggedIn=0;

			this.router.events
		    .subscribe(
		        (url:any) => {
		            let _ruta = "";
		            if(typeof url.url!=undefined && url.url!=undefined){
		            url.url.split("/").forEach(element => {
		                if(element!=="" && _ruta==="")
		                    _ruta="/"+element;
		                });
		            this.current_page=_ruta; //<<<---- Root path
		            
		        	}
		        }); 
		}
		
	ngAfterViewInit()
		{

		}
}

import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AuthServices} from '../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent {


	constructor( private formBuilder: FormBuilder, public http: Http,private _services:AuthServices,private route: ActivatedRoute,private router: Router)
		{
			
		}
}

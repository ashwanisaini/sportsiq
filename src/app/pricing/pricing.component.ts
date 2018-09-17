import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {AdminServices} from '../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
})
export class PricingComponent {

	public all_plans:any = [];
	public all_features:any;
	public mapped_feature_plan:any;
    public parsed_data: any;


	constructor( public http: Http,private _services:AdminServices,
		private route: ActivatedRoute,private router: Router){
			
	}

	ngOnInit() {		
		this.getPlans();		
	}

	getPlans(){
		this.all_plans = [];
		this._services.getTableData("subscriptions",{"order":"orderby ASC"}).subscribe(
            response => {
                this.all_plans = response;
                this.getFeatures();
            },
            error => {
                console.log(error);
                //this.alertMessage = 'error in response';
            }
        );

	}

	getFeatures(){
		//this.all_plans = {};
		this._services.getTableData("feature_details",{}).subscribe(
            response => { 
            this.all_features = response;               
                this.getMappedFeaturesPlan(response);
                
            },
            error => {
                console.log(error);
                //this.alertMessage = 'error in response';
            }
        );

	}

	getMappedFeaturesPlan(features: any){
        console.log(features);
        this.parsed_data=[];
        //this.all_plans = {};
		this._services.getTableData("subscription_plan_details",{}).subscribe(
            response => {
                console.log(response);
                for(let i=0;i<this.all_features.length;i++)
                   {
                       let temp={};
                       temp['feature_name']=this.all_features[i].description;
                       for(let j=0;j<this.all_plans.length;j++)
                          {
                            for(let k=0;k<response.length;k++)
                               {
                                   if(response[k].feature_id==this.all_features[i].id && response[k].subscription_id==this.all_plans[j].id)
                                       {
                                           temp[this.all_plans[j].id]='Yes'; break;
                                       }
                                   else
                                       temp[this.all_plans[j].id]='No';
                               }
                          }
                        this.parsed_data.push(temp);
                   }
                console.log(this.parsed_data);
            },
            error => {
                console.log(error);
            }
        );

	}



}

import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AdminServices} from '../../../services/admin.services';
import {ActivatedRoute, Router} from '@angular/router';
import * as Constants from '../../../services/constants';
import swal from "sweetalert2";
import * as _ from 'underscore';

@Component({
    selector: 'app-right-ads',
    templateUrl: './ads.component.html',
    styleUrls: ['./ads.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdsComponent implements OnInit {
    @Input() property: any;

    public advertisements: any = [];


    constructor(public http: Http,
                private route: ActivatedRoute,
                private router: Router,
                private _services: AdminServices) {
    }

    ngOnInit() {
        this.getList();
    }

    //only fetch side bar ads
    getList() {

        this.advertisements = [];
        let payload = {'where': {'is_active': 1}};
        this._services.getTableData('advertisements', payload).subscribe(
            response => {

                const matched = _.where(response, {'location': 1});

                if (_.size(matched) > 1) {
                    this.advertisements.push(matched[_.random(0, 1)]);
                } else if (_.size(matched) == 1) {
                    this.advertisements.push(matched[0]);
                }

            },
            error => {
                //swal.setDefaults({showConfirmButton: true});
                //swal('Oops...', 'Advertisement List could not be fetched, please try again later.', 'error')
            }
        );
    }


}

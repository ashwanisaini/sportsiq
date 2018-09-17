/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'ngx-app',
  template: '<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>',
  styleUrls:["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngAfterViewChecked()  {
    
           $("#nb-global-spinner").hide();
            
        };

}

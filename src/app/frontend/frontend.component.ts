import { Component } from '@angular/core';

import { MENU_ITEMS } from './frontend-menu';
import {AdsComponent} from '../shared/components/ads/ads.component';

@Component({
  selector: 'ngx-frontend',
  template: `
    <router-outlet></router-outlet>
   
  `,
})
export class FrontendComponent {

  menu = MENU_ITEMS;
}

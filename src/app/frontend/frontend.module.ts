import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule, routedComponents } from './frontend-routing.module';
import { FileUploaderModule } from '../shared/modules/fileuploader.module';
import {MainPipe} from '../shared/pipes/main-pipe.module';
import {TimeAgoPipe} from 'time-ago-pipe';
import {AdsModule} from '../shared/components/ads/ads.module';
import {AdsComponent} from '../shared/components/ads/ads.component';



const PAGES_COMPONENTS = [
  FrontendComponent, AdsComponent
];

@NgModule({
  imports: [
    FrontendRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FileUploaderModule,
    MainPipe,
    AdsModule
  ],
  exports:[AdsModule],
  declarations: [
    ...PAGES_COMPONENTS,
    ...routedComponents,
      TimeAgoPipe,
      AdsComponent
  ]
})
export class FrontendModule {
}

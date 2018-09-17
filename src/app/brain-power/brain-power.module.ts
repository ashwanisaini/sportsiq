import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ThemeModule } from '../../@theme/theme.module';
import { BrainPowerRoutingModule, routedComponents } from './brain-power-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BrainPowerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class BrainPowerModule { }

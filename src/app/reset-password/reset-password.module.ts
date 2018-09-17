import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ThemeModule } from '../../@theme/theme.module';
import { ResetPasswordRoutingModule, routedComponents } from './reset-password-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ResetPasswordModule { }

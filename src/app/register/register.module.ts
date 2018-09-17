import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ThemeModule } from '../../@theme/theme.module';
import { RegisterRoutingModule, routedComponents } from './register-routing.module';
import { FileUploaderModule } from '../shared/modules/fileuploader.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FileUploaderModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class RegisterModule { }

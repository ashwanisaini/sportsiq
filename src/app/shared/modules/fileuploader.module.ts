import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  exports:[FileDropDirective,FileSelectDirective],
  declarations: [   
    FileDropDirective, 
    FileSelectDirective
  ],
})
export class FileUploaderModule {
}

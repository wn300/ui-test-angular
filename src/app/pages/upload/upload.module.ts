import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUploadComponent } from './ui-upload/ui-upload.component';



@NgModule({
  declarations: [UiUploadComponent],
  exports: [UiUploadComponent],
  imports: [
    CommonModule
  ]
})
export class UploadModule { }

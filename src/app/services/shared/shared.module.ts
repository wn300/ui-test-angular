import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from './file-upload/file-upload.service';



@NgModule({
  declarations: [],
  providers:[FileUploadService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

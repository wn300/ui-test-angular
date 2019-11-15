import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from './file-upload/file-upload.service';
import { DatatableService } from './datatable/datatable.service';



@NgModule({
  declarations: [],
  providers:[FileUploadService, DatatableService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

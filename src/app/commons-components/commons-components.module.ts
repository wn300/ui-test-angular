import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CommonsComponentsModule { }

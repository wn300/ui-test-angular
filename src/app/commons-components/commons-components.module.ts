import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatIconModule } from "@angular/material/icon";
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [FileUploadComponent, DataTableComponent],
  exports: [FileUploadComponent, DataTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ]
})
export class CommonsComponentsModule { }

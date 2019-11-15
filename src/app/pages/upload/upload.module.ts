import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  UiUploadComponent,
  MessageComponent
} from "./ui-upload/ui-upload.component";
import { CommonsComponentsModule } from "src/app/commons-components/commons-components.module";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";


@NgModule({
  declarations: [UiUploadComponent, MessageComponent],
  exports: [UiUploadComponent],
  entryComponents: [MessageComponent],
  imports: [
    CommonModule,
    CommonsComponentsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class UploadModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiDownloadComponent } from "./ui-download/ui-download.component";
import { MatCardModule } from "@angular/material/card";
import { CommonsComponentsModule } from "src/app/commons-components/commons-components.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [UiDownloadComponent],
  exports: [UiDownloadComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommonsComponentsModule,
    MatButtonModule
  ]
})
export class DownloadModule {}

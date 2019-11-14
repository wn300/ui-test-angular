import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiDownloadComponent } from "./ui-download/ui-download.component";

@NgModule({
  declarations: [UiDownloadComponent],
  exports: [UiDownloadComponent],
  imports: [CommonModule]
})
export class DownloadModule {}

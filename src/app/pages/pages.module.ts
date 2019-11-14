import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { DownloadModule } from "./download/download.module";
import { UploadModule } from "./upload/upload.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, DownloadModule, UploadModule]
})
export class PagesModule {}

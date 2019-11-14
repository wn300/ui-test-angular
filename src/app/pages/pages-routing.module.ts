// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiUploadComponent } from './upload/ui-upload/ui-upload.component';
import { UiDownloadComponent } from './download/ui-download/ui-download.component';

const routes: Routes = [
    {
      path: 'upload',
      component: UiUploadComponent,
    },
    {
      path: 'download',
      component: UiDownloadComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {}
  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpApiModule } from './http-api/http-api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpApiModule
  ]
})
export class ServicesModule { }

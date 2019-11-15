import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from './employees/employees.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [EmployeesService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HttpApiModule { }

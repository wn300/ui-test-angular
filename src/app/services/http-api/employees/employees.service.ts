import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http: HttpClient) { }

  getEmployess(){
    return this.http.get(`${environment.path}/employees`).pipe(
      map((data) => data)
    );
  }

  uploadFile(formData){
    return this.http.post(`${environment.path}/employees/upload_file`, formData).pipe(
      map((data) => data)
    );
  }
}

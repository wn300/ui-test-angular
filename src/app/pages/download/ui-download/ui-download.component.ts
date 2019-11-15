import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/services/shared/datatable/datatable.service";
import { EmployeesService } from "src/app/services/http-api/employees/employees.service";
import { Employee } from "src/app/models/employee.model";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-ui-download",
  templateUrl: "./ui-download.component.html",
  styleUrls: ["./ui-download.component.css"]
})
export class UiDownloadComponent implements OnInit {
  public objectEmployee: Employee[] = [];
  private subscription: Subscription;

  constructor(
    public datatableService: DatatableService,
    public employeesService: EmployeesService
  ) {}

  ngOnInit() {
    this.subscription = this.employeesService
      .getEmployess()
      .subscribe((data: Employee[]) => {
        this.objectEmployee = data;
        this.datatableService.setPrintDataTable(this.objectEmployee);
      });
  }

  getFile() {
    window.open(`${environment.path}/employees/file`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

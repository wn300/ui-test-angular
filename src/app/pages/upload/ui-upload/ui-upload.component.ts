import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { FileUploadService } from "src/app/services/shared/file-upload/file-upload.service";
import { Subscription } from "rxjs";
import { EmployeesService } from "src/app/services/http-api/employees/employees.service";
import { MatSnackBar } from "@angular/material/snack-bar";

import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "src/app/models/employee.model";
import { DatatableService } from 'src/app/services/shared/datatable/datatable.service';

@Component({
  selector: "app-ui-upload",
  templateUrl: "./ui-upload.component.html",
  styleUrls: ["./ui-upload.component.css"]
})
export class UiUploadComponent implements OnInit, OnDestroy {
  public extensions = ".xlsx, .xls";
  public filequotation = "excel_upload";
  private subscription: Subscription;
  private objectFile: FormData = new FormData();
  public dataSource: MatTableDataSource<Employee> = new MatTableDataSource<
    Employee
  >([]);

  constructor(
    public fileUploadService: FileUploadService,
    public employeesService: EmployeesService,
    private _snackBar: MatSnackBar,
    public datatableService: DatatableService
  ) {
    this.subscription = this.fileUploadService
      .getObjetFile()
      .subscribe(data => {
        this.objectFile.append("uploads", data, data.name);
        this.employeesService
          .uploadFile(this.objectFile)
          .subscribe((data: any) => {
            this.dataSource = new MatTableDataSource<Employee>(data);
            this.datatableService.setPrintDataTable(data);
            this.openSnackBar();
          });
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 2000
    });
  }
}

@Component({
  selector: "snack-bar-component-example-snack",
  template: `
    <span> {{ message }} 👍🏽 👍🏽 👍🏽 </span>
  `
})
export class MessageComponent {
  message: string = "Cargado con exito";
}

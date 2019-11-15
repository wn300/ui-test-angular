import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "src/app/models/employee.model";
import { DatatableService } from "src/app/services/shared/datatable/datatable.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  private subscription: Subscription;
  public dataSource: MatTableDataSource<Employee> = new MatTableDataSource<
    Employee
  >([]);
  displayedColumns: string[] = [
    "name",
    "last_name",
    "identification",
    "phone",
    "email"
  ];
  constructor(public datatableService: DatatableService) {
    this.subscription = this.datatableService.getPrintDataTable().subscribe((data: any) => {
      this.printData(data);
    });
  }
  ngOnInit() {}

  printData(data) {
    this.dataSource = new MatTableDataSource<Employee>(data);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

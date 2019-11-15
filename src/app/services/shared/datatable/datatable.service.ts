import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  public PrintDataTable: Subject<any> = new Subject<any>();
  constructor() { }

  getPrintDataTable() {
    return this.PrintDataTable;
  }

  setPrintDataTable(object: any) {
    return this.PrintDataTable.next(object);
  }
}

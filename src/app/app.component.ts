import { Component, ViewChild, } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { MatSidenav } from '@angular/material';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
  }

  ngDoCheck(){
    //console.log(this.mobileQuery);
  }

  ngAfterViewInit(){}

  ngOnInit() {}

  emitAction(e){
    this.sidenav.toggle();
  }
  getMobileQuery(){
    return this.mobileQuery;
  }
}

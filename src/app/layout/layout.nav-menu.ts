import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "layout-nav-menu",
  template: `
      <mat-nav-list>
        <a mat-list-item [routerLink]="nav.route" routerLinkActive="active-list-item" *ngFor="let nav of fillerNav">
          <mat-icon class="pd-10-right" aria-hidden="false" aria-label="Example home icon">{{
            nav.icon
          }}</mat-icon>
        {{ nav.name }}</a
        >
      </mat-nav-list>
  `
})
export class LayoutNavMenuComponent {
  mobileQuery: MediaQueryList;
  public fillerNav: any[] = [];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.fillerNav = [
      {
        icon: "cloud_upload",
        name: "Subir Archivo",
        route: "upload"
      },
      {
        icon: "cloud_download",
        name: "Bajar Archivo",
        route: "download"
      }
    ];
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

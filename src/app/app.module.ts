import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSidenavModule } from "@angular/material/sidenav";

import { LayoutModule } from "./layout/layout.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    PagesModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { MatSidenavModule } from "@angular/material/sidenav";

import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
// import { IndexModule } from './pages/index/index.module';
// import { OperationModule } from './pages/operation/operation.module';
// import { ProgramationModule } from './pages/programation/programation.module';
// import { TraceabilityModule } from './pages/traceability/traceability.module';
// import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    // IndexModule,
    // OperationModule,
    // ProgramationModule,
    // TraceabilityModule,
    // UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

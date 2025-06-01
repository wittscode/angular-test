// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, BrowserAnimationsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { DsButtonComponent } from "./ds-button/ds-button.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CourseCardComponent, DsButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CompetenciesModule} from "./competencies/competencies.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CompetenciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

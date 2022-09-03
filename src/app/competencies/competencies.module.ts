import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonListComponent} from './person-list/person-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PersonListComponent
  ],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CompetenciesModule { }

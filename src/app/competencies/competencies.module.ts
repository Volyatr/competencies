import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonListComponent} from './person-list/person-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { PersonUpdateDialogComponent } from './person-update-dialog/person-update-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { RemoveDialogComponent } from './confirm-remove-dialog/remove-dialog.component';


@NgModule({
  declarations: [
    PersonListComponent,
    PersonUpdateDialogComponent,
    RemoveDialogComponent
  ],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CompetenciesModule { }

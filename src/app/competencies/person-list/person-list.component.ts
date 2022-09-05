import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Person } from '../../model/person';
import { PersonApiService } from '../../services/person-api.service';
import { MatDialog } from '@angular/material/dialog';
import { PersonUpdateDialogComponent } from '../person-update-dialog/person-update-dialog.component';
import { DialogData } from '../../model/dialog-data';
import { RemoveDialogComponent } from '../confirm-remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['icon', 'firstName', 'lastName', 'actions'];

  data: Person[] = [];

  private destroy: Subject<void> = new Subject<void>();

  constructor(
    private personApiService: PersonApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.personApiService.getAll().subscribe((persons) => {
      this.data = persons;
    });
  }

  addPerson(): void {
    const dialogData: DialogData = {
      title: 'Создание сотрудника',
    };
    this.openDialog(dialogData)
      .pipe(
        filter((person) => Boolean(person)),
        switchMap((person) => this.personApiService.add(<Person>person)),
        switchMap(() => this.personApiService.getAll()),
        takeUntil(this.destroy)
      )
      .subscribe((persons) => (this.data = persons));
  }

  editPerson(id: number): void {
    const requiredPerson = this.data.find((person) => person.id === id);
    const dialogData: DialogData = {
      title: 'Редактирование сотрудника',
      person: requiredPerson,
    };
    this.openDialog(dialogData)
      .pipe(
        filter((person) => Boolean(person)),
        switchMap((person) => this.personApiService.edit(id, <Person>person)),
        switchMap(() => this.personApiService.getAll()),
        takeUntil(this.destroy)
      )
      .subscribe((persons) => (this.data = persons));
  }

  removePerson(id: number): void {
    this.openRemoveDialog()
      .pipe(
        filter((person) => Boolean(person)),
        switchMap(() => this.personApiService.delete(id)),
        switchMap(() => this.personApiService.getAll()),
        takeUntil(this.destroy)
      )
      .subscribe((persons) => (this.data = persons));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  private openRemoveDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '400px',
    });

    return dialogRef.afterClosed();
  }

  private openDialog(data: DialogData): Observable<Person | null> {
    const dialogRef = this.dialog.open(PersonUpdateDialogComponent, {
      width: '500px',
      data,
    });

    return dialogRef.afterClosed();
  }
}

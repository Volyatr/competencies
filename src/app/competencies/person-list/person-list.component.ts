import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, switchMap, takeUntil} from "rxjs";
import {Person} from "../../model/person";
import {PersonApiService} from "../../services/person-api.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['icon', 'firstName', 'lastName', 'actions'];

  data: Person[] = [];

  private destroy: Subject<void> = new Subject<void>();

  constructor(
    private personApiService: PersonApiService) {
  }

  ngOnInit(): void {
    this.personApiService.getAll().subscribe(persons => {
      this.data = persons
    });
  }

  addPerson(): void {
    const person = {
      id: null,
      firstName: 'Vladislav',
      lastName: 'Alexandrov'
    }
    this.personApiService.add(person).pipe(
      switchMap(() => this.personApiService.getAll()),
      takeUntil(this.destroy)
    ).subscribe(persons => this.data = persons);
  }

  editPerson(id: number): void {
    const person = {
      id: null,
      firstName: 'Vladislav',
      lastName: 'Alexandrov'
    }
    this.personApiService.edit(id, person).pipe(
      switchMap(() => this.personApiService.getAll()),
      takeUntil(this.destroy)
    ).subscribe(persons => this.data = persons);
  }

  removePerson(id: number): void {
    this.personApiService.delete(id).pipe(
      switchMap(() => this.personApiService.getAll()),
      takeUntil(this.destroy)
    ).subscribe(persons => this.data = persons);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

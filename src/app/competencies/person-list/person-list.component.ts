import {Component} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Observable} from "rxjs";
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  displayedColumns: string[] = ['icon', 'firstName', 'lastName', 'actions'];

  data: Observable<Person[]> = this.personService.getAll();

  constructor(private personService: PersonService) {
  }
}

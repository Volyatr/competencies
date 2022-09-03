import { Component } from '@angular/core';
import {PersonService} from "./services/person.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'competencies';

  constructor(private personService: PersonService) {
    this.personService.getPersons();
  }
}

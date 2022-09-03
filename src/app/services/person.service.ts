import {Injectable} from "@angular/core";
import {PersonApiService} from "./person-api.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private apiService: PersonApiService) {
  }

  getPersons() {
    this.apiService.get();
  }
}

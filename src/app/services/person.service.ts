import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${url}/persons`);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${url}/persons/${id}`);
  }

  edit(id:number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${url}/persons/${id}`, person);
  }

  add(person: Person): Observable<Person> {
    return this.http.post<Person>(`${url}/persons` , person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${url}/persons/${id}`);
  }
}
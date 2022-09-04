import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";

const url = 'http://localhost:3000/api/v1/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${url}`);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${url}/${id}`);
  }

  edit(id:number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${url}/${id}`, person);
  }

  add(person: Person): Observable<Person> {
    return this.http.post<Person>(`${url}`, person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }
}

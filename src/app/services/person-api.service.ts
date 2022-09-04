import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, Observable, tap} from "rxjs";
import {Person} from "../model/person";
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


const url = 'http://localhost:3000/api/v1/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {
  successSnackBarConfig: MatSnackBarConfig = {
    duration: 1500,
    panelClass: ['green-snackbar'],
  };

  errorSnackBarConfig: MatSnackBarConfig = {
    duration: 1500,
    panelClass: ['red-snackbar'],
  };

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${url}`);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${url}/${id}`);
  }

  edit(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${url}/${id}`, person).pipe(
      tap(() => this.snackBar.open('Пользователь изменен', '', this.successSnackBarConfig)),
      catchError((err) => {
        console.log(err)
        this.snackBar.open('Что то пошло не так', '', this.errorSnackBarConfig);
        return EMPTY;
      }),
    );
  }

  add(person: Person): Observable<Person> {
    return this.http.post<Person>(`${url}`, person).pipe(
      tap(() => this.snackBar.open('Пользователь добавлен', '', this.successSnackBarConfig)),
      catchError(() => {
        this.snackBar.open('Что то пошло не так', '', this.errorSnackBarConfig);
        return EMPTY;
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`).pipe(
      tap(() => this.snackBar.open('Пользователь удален', '', this.successSnackBarConfig)),
      catchError(() => {
        this.snackBar.open('Что то пошло не так', '', this.errorSnackBarConfig);
        return EMPTY;
      }),
    );
  }
}

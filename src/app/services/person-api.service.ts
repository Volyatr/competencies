import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {
  constructor(private http: HttpClient) {
  }

  get() {
    this.http.get('http://localhost:3000/persons').subscribe(console.log)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private jsonUrl = 'assets/users.json';

  public getJson(): Observable<any>{
    return this.http.get(this.jsonUrl);
  }
}

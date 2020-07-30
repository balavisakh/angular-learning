import { Injectable } from '@angular/core';
import * as data from '../../assets/users.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public bSubject = new BehaviorSubject('');
  api_url = environment.api_url;
  constructor(private http: HttpClient) {}

  users: User = (data as any).default;
  public getJson(): User {
    return this.users;
  }
  sendValue(value: any): void {
    this.bSubject.next(value);
  }

  getValue(): Observable<any> {
    return this.bSubject.asObservable();
  }

  isUserLoggedIn(): boolean{
    return localStorage.getItem('role') === '1';
  }
  isAdminLoggedIn(): boolean{
    return localStorage.getItem('role') === '2';
  }

  getUsers(): Observable<any> {
    return this.http.get(this.api_url);
  }
}

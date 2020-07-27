import { Injectable } from '@angular/core';
import * as data from '../../assets/users.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public bSubject = new BehaviorSubject('');
  constructor() {}

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
}

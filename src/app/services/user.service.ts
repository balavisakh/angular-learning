import { Injectable } from '@angular/core';
import * as data from '../../assets/users.json';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private bSubject = new BehaviorSubject('');
  constructor() {}

  users: any = (data as any).default;
  public getJson(): any {
    return this.users;
  }
  sendValue(value: any): void {
    this.bSubject.next(value);
  }

  getValue(): Observable<any> {
    return this.bSubject.asObservable();
  }
}

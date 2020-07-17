import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private subject = new Subject();
  constructor() { }

  sendValue(value: any): void{
    this.subject.next(value);
  }

  getValue(): Observable<any>{
    return this.subject.asObservable();
  }
}

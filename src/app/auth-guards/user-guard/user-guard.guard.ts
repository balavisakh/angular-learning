import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../../services/user.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: UserService){}
  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
    return true;
    }
    else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: UserService) {}
  canActivate(): boolean {
    if (this.authService.isAdminLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }
}

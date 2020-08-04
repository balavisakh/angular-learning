import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  users: any[];
  usersLength;
  private subscription: Subscription;
  afterLogin: string;
  afterAdminLogin: boolean;
  afterUserLogin: boolean;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getSelectedValues();
  }

  getSelectedValues(): void {
    this.subscription = this.userService.getValue().subscribe((value) => {
      this.users = value;
      this.afterLogin = localStorage.getItem('role');
      this.afterUserLogin = (localStorage.getItem('role') === '1');
      this.afterAdminLogin = (localStorage.getItem('role') === '2');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    localStorage.clear();
    this.afterLogin = null;
    this.afterAdminLogin = null;
    this.afterUserLogin = null;
    this.router.navigate(['login']);
  }
}

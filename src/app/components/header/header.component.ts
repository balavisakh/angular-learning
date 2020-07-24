import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  users: any;
  private subscription: Subscription;
  constructor(private userService: UserService, private router: Router) { }
  user: any;
  admin: any;
  logOut: any;
  ngOnInit(): void {
    this.user = localStorage.getItem('role') === '1';
    this.admin = localStorage.getItem('role') === '2';
    this.logOut = this.admin || this.user;
    this.getSelectedValues();
    this.logout();
  }

  getSelectedValues(): void {
    this.subscription = this.userService.getValue().subscribe((value) => {
      this.users = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}

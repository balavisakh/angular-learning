import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  userRole;
  adminRole;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog, ) {}
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit(): void {}
  onSubmit(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    if (username === 'user' && password === 'user') {
      this.userRole = localStorage.setItem('role', '1');
      this.userService.sendValue(this.userRole);
      this.router.navigate(['user']);
    } else if (username === 'admin' && password === 'admin') {
      this.adminRole = localStorage.setItem('role', '2');
      this.userService.sendValue(this.adminRole);
      this.router.navigate(['admin']);
    } else {
      this.dialog.open(LoginAlertMessageComponent);
    }
  }
}

@Component({
  selector: 'app-login-alert',
  templateUrl: 'login-alert-message.html',
  styleUrls: ['./login.component.css']
})
export class LoginAlertMessageComponent {}

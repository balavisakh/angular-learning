import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  onSubmit(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('username').value;
    if (username === 'user' && password === 'user') {
      localStorage.setItem('role', '1');
      this.router.navigate(['userDirectory/user-list']);
    }
    else if (username === 'admin' && password === 'admin') {
      localStorage.setItem('role', '2');
      this.router.navigate(['adminDirectory/admin-panel']);
    }
    else {
      alert('Username and password is wrong');
      localStorage.clear();
    }
  }
}

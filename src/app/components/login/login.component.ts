import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  onSubmit(): void{
    const username = this.form.get('username').value;
    const password = this.form.get('username').value;
    if (username === 'admin' && password === 'admin'){
      this.router.navigate(['userDirectory/user-list']);
    }
    else{
      alert('Username and password is wrong');
    }
  }
}

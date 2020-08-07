import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  durationInSeconds = 5;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snakBar: MatSnackBar
  ) {}
  form = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    phonenumber: ['', Validators.required],
  });
  ngOnInit(): void {}

  addUser(): void {
    if (this.form.valid) {
      const data = this.form.value;
      this.userService.addUser(data).subscribe(() => {
        this.router.navigate(['admin/user-management']);
        console.log('user added');
        this.snakBar.openFromComponent(UserAddedMessageComponent, { duration: this.durationInSeconds * 1000});
        console.log(this.form.value);
        this.form.reset();
      });
    }
  }
}

@Component({
  selector: 'app-user-added',
  templateUrl: 'user-added-message.html',
  styles: [`
    .success-message {
      color: hotpink;
    }
  `],
})
export class UserAddedMessageComponent {}

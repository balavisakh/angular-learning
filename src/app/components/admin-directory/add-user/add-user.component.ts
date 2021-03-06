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
  addUserForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    age: ['', [Validators.required, Validators.max(200)]],
    email: ['', [Validators.required, Validators.email]],
    phonenumber: ['', Validators.required],
  });
  ngOnInit(): void {
  }

  addUser(): void {
    if (this.addUserForm.valid) {
      const data = this.addUserForm.value;
      this.userService.addUser(data).subscribe(() => {
        this.router.navigate(['admin/dashboard/user-management']);
        this.snakBar.openFromComponent(UserAddedMessageComponent, { duration: this.durationInSeconds * 1000});
        this.addUserForm.reset();
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

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../entities/user.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  durationInSeconds = 5;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snakBar: MatSnackBar
  ) {}
  userId;
  form;
  userDetail;
  initializeForm(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', [Validators.required, Validators.max(200)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
    });
  }

  getParams(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;
    });
    this.initializeForm();
  }
  ngOnInit(): void {
    this.getParams();
    this.getUserById(this.userId);
  }

  getUserById(userId): void {
    this.userService.getUserById(userId).subscribe((data) => {
      this.userDetail = data;
      this.form.patchValue({
        firstname: this.userDetail.firstname,
        lastname: this.userDetail.lastname,
        password: this.userDetail.password,
        age: this.userDetail.age,
        email: this.userDetail.email,
        phonenumber: this.userDetail.phonenumber,
      });
    });
  }

  updateuser(): void {
    const userData = this.form.value;
    this.userService.updateUser(this.userId, userData).subscribe(() => {
      this.snakBar.openFromComponent(UserUpdatedMessageComponent, {duration: this.durationInSeconds * 1000});
      this.router.navigate(['admin/dashboard/user-management']);
    });
  }
}

@Component({
  selector: 'app-user-updated',
  templateUrl: 'user-updated-message.html',
  styles: [
    `
      .success-message {
        color: hotpink;
      }
    `,
  ],
})
export class UserUpdatedMessageComponent {}

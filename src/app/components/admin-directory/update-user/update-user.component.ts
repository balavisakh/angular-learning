import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../entities/user.entity';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }
  userId;
  form;
  userDetail;
  initializeForm(): void {
  this.form = this.fb.group({
    position: ['', Validators.required],
    name: ['', Validators.required],
    age: ['', Validators.required],
    phonenumber: ['', Validators.required],
  });
}

  getParams(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;
      console.log('params id', this.userId);
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
        position: this.userDetail.position,
        name: this.userDetail.name,
        age: this.userDetail.age,
        phonenumber: this.userDetail.phonenumber
      });
    });
  }

  updateuser(): void {
    console.log('userId', this.userId);
    console.log('userUpdateValue', this.form.value);
    const userData = this.form.value;
    this.userService.updateUser(this.userId , userData).subscribe(() => {
      console.log('user updated');
      this.router.navigate(['admin/user-management']);
    });
  }
}
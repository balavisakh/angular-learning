import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
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
        console.log(this.form.value);
        this.form.reset();
      });
    }
  }
}

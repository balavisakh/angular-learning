import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit(): void {
  }

}

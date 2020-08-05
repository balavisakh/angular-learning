import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.userService.getUsers().subscribe((user) => {
      this.userDetails = user;
      console.log('userdtails', this.userDetails);
    });
  }
}

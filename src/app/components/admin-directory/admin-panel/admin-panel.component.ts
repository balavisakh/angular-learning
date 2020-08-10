import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  selectedUsers: any[];
  users;

  // fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({ length: 50 }, () =>
  //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);



  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    // this.getUserData();
    this.getUsers();
   }

  // getUserData(): void {
  //   const jsonValue = this.userService.getJson();
  //   const userListData = 'users';
  //   this.users  = jsonValue[userListData];
  // }
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}


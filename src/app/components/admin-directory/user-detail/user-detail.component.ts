import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  userId;
  userDetail;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getUserDetail(this.userId);
  }

  getUserId(): void {
    this.activatedRoute.params.subscribe((userid) => {
      this.userId = userid.id;
    });
  }

  getUserDetail(userId): void {
    this.userService.getUserById(userId).subscribe((userdetail) => {
      this.userDetail = userdetail;
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  users: any;
  private subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getSelectedValues();
  }

  getSelectedValues(): void {
    this.subscription = this.userService.getValue().subscribe((value) => {
      this.users = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

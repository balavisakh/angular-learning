import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css'],
})
export class UserSelectionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageList: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getSelectedValues();
  }

  getSelectedValues(): void {
    this.subscription = this.userService.getValue().subscribe((value) => {
      this.messageList = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

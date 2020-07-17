import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageList: any[] = [];
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.getSelectedValues();
  }

  getSelectedValues(): void {
    this.shareService.getValue().subscribe((value) => {
      this.messageList = value;
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}

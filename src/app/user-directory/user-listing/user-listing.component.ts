import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})

export class UserListingComponent implements OnInit{
  userList: User[];
  displayedColumns: string[] = ['select', 'position', 'name', 'age', 'phonenumber'];
  dataSource = new MatTableDataSource<User>(this.userList);
  selection = new SelectionModel<User>(true, []);
  selectedValue;
  constructor( private UserServices: UserService, private shareService: ShareService ) { }
  ngOnInit(): void {
    this.getUserData();
    this.isAllSelected();
    this.masterToggle();
    this.checkboxLabel();
  }

  getUserData(): void{
    this.UserServices.getJson().subscribe((data: User) => {
      const userListData = 'users';
      this.dataSource.data = data[userListData];
      this.userList = this.dataSource.data;
    });
  }

  /* Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean{
    const numSelected = this.selection.selected.length;
    this.selectedValue = this.selection.selected;
    // console.log('h', this.selectedValue);s
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    }

   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    }

   /** The label for the checkbox on the passed row */
   checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  selectedValues(): void{
    this.shareService.sendValue(this.selection.selected);
    console.log('userListing', this.selection.selected);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})

export class UserListingComponent implements OnInit {
  userList: User[];
  displayedColumns: string[] = ['select', 'position', 'name', 'age', 'phonenumber'];
  dataSource = new MatTableDataSource<User>(this.userList);
  selection = new SelectionModel<User>(true, []);
  selectedValue;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private UserServices: UserService) { }
  ngOnInit(): void {
    this.getUserData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // getUserData(): void{
  //   this.UserServices.getJson().subscribe((data: User) => {
  //     const userListData = 'users';
  //     this.dataSource.data = data[userListData];
  //     this.userList = this.dataSource.data;
  //     console.log('userlistdata', this.userList);
  //   });
  // }

  getUserData(): void {
    const jsonValue = this.UserServices.getJson();
    const userListData = 'users';
    this.dataSource.data = jsonValue[userListData];
    this.userList = this.dataSource.data;
    console.log(jsonValue);
  }

  /* Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    this.selectedValue = this.selection.selected;
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

  selectedValues(): void {
    this.UserServices.sendValue(this.selection.selected);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

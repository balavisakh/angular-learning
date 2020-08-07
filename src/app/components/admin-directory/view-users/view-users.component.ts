import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../entities/user.entity';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  userList: User[];
  displayedColumns: string[] = [
    'select',
    'firstname',
    'lastname',
    'password',
    'email',
    'age',
    'phonenumber',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>(this.userList);
  selection = new SelectionModel<User>(true, []);
  selectedValue;
  durationTimeInSeconds = 5;
  userId;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private UserServices: UserService,
    private router: Router,
    private snakBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUsers();
  }
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    this.selectedValue = this.selection.selected;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
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
  navAddUser(): void {
    this.router.navigate(['admin/add-user']);
  }
  // Get users
  getUsers(): void {
    this.UserServices.getUsers().subscribe((users) => {
      this.userList = users;
      this.dataSource.data = this.userList;
    });
  }
  // Delete user
  deleteUser(userId): void {
    console.log('useriddd', userId);
    this.UserServices.deleteUser(userId).subscribe(() => {
      this.getUsers();
      this.snakBar.openFromComponent(UserDeletedMessageComponent, {
        duration: this.durationTimeInSeconds * 1000,
      });
      console.log('deleted');
    });
  }
  // Edit user by id
  edituser(userId): void {
    console.log('editId', userId);
    this.router.navigate(['admin/updateuser/', userId]);
  }

  navViewUser(): void {
    this.router.navigate(['admin/view-users']);
  }
}

@Component({
  selector: 'app-user-deleted',
  templateUrl: 'user-deleted-message.html',
  styles: [
    `
      .success-message {
        color: hotpink;
      }
    `,
  ],
})
export class UserDeletedMessageComponent {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDirectoryRoutingModule } from './admin-directory-routing.module';
import { AdminDirectoryComponent } from './admin-directory.component';
import { ChartComponent } from './chart/chart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserManagementComponent } from './user-management/user-management.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ShowUsersComponent } from './show-users/show-users.component';






@NgModule({
  declarations: [AdminDirectoryComponent, ChartComponent, AdminPanelComponent, UserManagementComponent, AddUserComponent, ViewUsersComponent, UpdateUserComponent, SideNavComponent, ShowUsersComponent],
  imports: [
    CommonModule,
    AdminDirectoryRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule
  ]
})
export class AdminDirectoryModule { }

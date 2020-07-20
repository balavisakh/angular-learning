import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDirectoryRoutingModule } from './user-directory-routing.module';
import { UserDirectoryComponent } from './user-directory.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [UserDirectoryComponent, UserListingComponent, UserSelectionComponent],
  imports: [
    CommonModule,
    UserDirectoryRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class UserDirectoryModule { }

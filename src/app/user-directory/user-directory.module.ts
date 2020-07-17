import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDirectoryRoutingModule } from './user-directory-routing.module';
import { UserDirectoryComponent } from './user-directory.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [UserDirectoryComponent, UserListingComponent, UserSelectionComponent],
  imports: [
    CommonModule,
    UserDirectoryRoutingModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class UserDirectoryModule { }

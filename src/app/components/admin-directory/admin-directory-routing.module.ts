import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDirectoryComponent } from './admin-directory.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', component: AdminDirectoryComponent},
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  },
  {
    path: 'updateuser/:id',
    component: UpdateUserComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDirectoryRoutingModule {}

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDirectoryComponent } from './admin-directory.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
{path: '', redirectTo: 'dashboard/user-management', pathMatch: 'full'},
{
  path: 'dashboard',
    component: AdminDirectoryComponent,
    children: [  {
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
    },
    {
      path: 'view-users',
      component: ShowUsersComponent
    },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent
  }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDirectoryRoutingModule {}

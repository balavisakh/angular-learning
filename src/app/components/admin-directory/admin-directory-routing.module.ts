import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDirectoryComponent } from './admin-directory.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: AdminDirectoryComponent},
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDirectoryRoutingModule {}

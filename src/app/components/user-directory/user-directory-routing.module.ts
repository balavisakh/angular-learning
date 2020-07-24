import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDirectoryComponent } from './user-directory.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { AdminGuard } from '../../admin-guard/admin.guard';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListingComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDirectoryRoutingModule {}

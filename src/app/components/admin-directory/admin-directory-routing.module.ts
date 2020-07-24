import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDirectoryComponent } from './admin-directory.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminGuard } from '../../admin-guard/admin.guard';

const routes: Routes = [
  { path: '', component: AdminDirectoryComponent, canActivate: [AdminGuard] },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDirectoryRoutingModule {}

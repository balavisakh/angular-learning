import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDirectoryComponent } from './admin-directory.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: AdminDirectoryComponent},
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDirectoryRoutingModule {}

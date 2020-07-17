import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDirectoryRoutingModule } from './admin-directory-routing.module';
import { AdminDirectoryComponent } from './admin-directory.component';
import { ChartComponent } from './chart/chart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [AdminDirectoryComponent, ChartComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    AdminDirectoryRoutingModule
  ]
})
export class AdminDirectoryModule { }

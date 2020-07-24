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

@NgModule({
  declarations: [AdminDirectoryComponent, ChartComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    AdminDirectoryRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class AdminDirectoryModule { }

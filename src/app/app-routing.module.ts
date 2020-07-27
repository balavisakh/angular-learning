import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AdminGuard} from './auth-guards/admin-guard/admin.guard';
import { UserGuard } from './auth-guards/user-guard/user-guard.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user-directory/user-directory.module').then(
        (m) => m.UserDirectoryModule
      ), canActivate: [UserGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin-directory/admin-directory.module').then(
        (m) => m.AdminDirectoryModule
      ), canActivate: [AdminGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

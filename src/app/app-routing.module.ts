import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{ path: 'userDirectory', loadChildren: () => import('./user-directory/user-directory.module').then(m => m.UserDirectoryModule) }, { path: 'adminDirectory', loadChildren: () => import('./admin-directory/admin-directory.module').then(m => m.AdminDirectoryModule) }, { path: '', redirectTo: 'login', pathMatch: 'full' }, { path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

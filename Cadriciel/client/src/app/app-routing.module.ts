import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CubeComponent }   from './cube/cube.component';
import { PasswordFormComponent } from './admin/auth/password-form.component';
import { AdminComponent } from './admin/admin.component';
import { PageGrilleComponent } from './mots-croise/page-grille.component';
import { ChangePasswordComponent } from './admin/change-password.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/cube', pathMatch: 'full' },
  { path: 'cube',  component: CubeComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'password',  component: ChangePasswordComponent },
  { path: 'page-grille', component: PageGrilleComponent},
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CubeComponent }   from './cube/cube.component';
import { PasswordFormComponent } from './admin/auth/password-form.component';
import { AdminComponent } from './admin/admin.component';
import {CrosswordComponent} from './crossword/crossword.component';
import { GridComponent } from './crossword/grid.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/cube', pathMatch: 'full' },
  { path: 'cube',  component: CubeComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'crossword', component: CrosswordComponent},
  { path: 'grid', component: GridComponent},
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
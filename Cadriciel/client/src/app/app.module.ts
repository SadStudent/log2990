import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CubeComponent } from './cube/cube.component';
import { PasswordFormComponent } from './admin/auth/password-form.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './admin/change-password.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { GridComponent } from './crossword/grid.component';


import { RenderService } from './cube/render.service';
import { BasicService } from './basic.service';
import { AuthService } from './admin/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CubeComponent,
    PasswordFormComponent,
    AdminComponent,
    ChangePasswordComponent,
    CrosswordComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    RenderService,
    BasicService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

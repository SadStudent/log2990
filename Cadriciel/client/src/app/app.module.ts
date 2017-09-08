import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { PasswordFormComponent } from './admin/auth/password-form.component';
import { AdminComponent } from './admin/admin.component';

import { RenderService } from './cube/render.service';
import { BasicService } from './basic.service';
import { AuthService } from './admin/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    PasswordFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RenderService,
    BasicService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

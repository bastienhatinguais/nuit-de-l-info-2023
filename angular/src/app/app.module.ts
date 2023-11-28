import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './index/login/login.component';
import { HomeComponent } from './index/home/home.component';
import { HttpClientModule, HttpClientXsrfModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  providers: [
    CookieService,
    provideHttpClient(
      withInterceptors([UnauthorizedInterceptor])
    )],
  bootstrap: [AppComponent],
})
export class AppModule { }

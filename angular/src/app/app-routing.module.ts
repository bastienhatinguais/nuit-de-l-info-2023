import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { HomeComponent } from '@pages/home/home.component';
import { Role } from './enums/role.enum';
import { HasRoles } from '@guards/has-roles/has-roles.guard';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { QuizzComponent } from '@pages/quizz/quizz.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './index/review/review.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
    ],
    canActivate: [HasRoles(Role.ADMIN)],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'quizz',
    component: QuizzComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'questions',
    component: ReviewComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SummerCoursesComponent } from './summer-courses/summer-courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'about-us', component: AboutUsComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'summer-courses', component: SummerCoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent},
  { path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

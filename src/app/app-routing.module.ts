import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerComponent } from './modules/customer/customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'test',component:TestComponent},
  {path:'courses',component:CoursesComponent},
  {path:'home',component:HomeComponent,canActivate:[LoginGuard]},
  {path:'courses/:c_id',component:CourseDetailComponent},
  {path :'customer',loadChildren:()=>import('./modules/customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:'**',component:PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

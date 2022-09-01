import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
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
import { StudentHomeComponent } from './student-home/student-home.component';
import { TestComponent } from './test/test.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student-home', component: StudentHomeComponent},
  { path: 'all-students', component: AllStudentsComponent, },
  { path: 'add-student', component: AddStudentComponent,},
  { path: 'update-student/:id', component: UpdateStudentComponent },
  // {
  //   path: 'student-home', component: StudentHomeComponent,
  //   children: [
  //     { path: 'all-students', component: AllStudentsComponent, children: [{ path: 'update-student/:id', component: UpdateStudentComponent }] },
  //     { path: 'add-student', component: AddStudentComponent },
  //   ]
  // },

  // { path: 'test', component: TestComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'courses/:c_id', component: CourseDetailComponent },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(mod => mod.CustomerModule) },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

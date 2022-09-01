import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { PlacementsComponent } from './placements/placements.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SortPipe } from './app.sort';
import { SortNum } from './app.sortNumber';
import { LoginGuard } from './guard/login.guard';
import { LoginService } from './service/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoursesComponent,
    PlacementsComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    CourseDetailComponent,
    SortPipe,
    SortNum,
    TestComponent,
    StudentHomeComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    AllStudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,StudentService],
  bootstrap:[AppComponent]
})
export class AppModule { }




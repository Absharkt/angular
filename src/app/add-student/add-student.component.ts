import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewStudentServiceService } from '../services/new-student-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  sub: Subscription = new Subscription

  obs = new Observable((observer)=>{
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
    
  })

  constructor(private stud_service: NewStudentServiceService) { }

  ngOnInit(): void {

  }


  regStudent(form:NgForm){
    console.log(form.value )
    this.stud_service.postStudent(form.value).subscribe((res)=>{
      console.log(res);
      
    })
  }




}

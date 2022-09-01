import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewStudentServiceService } from '../services/new-student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

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

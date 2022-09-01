import { Component, OnInit } from '@angular/core';
import { NewStudentServiceService } from '../services/new-student-service.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  studentDetails:any

  constructor(private student : NewStudentServiceService) { 
    this.studentData()
  }

  ngOnInit(): void {
   
  }

  show = true

  deleteStudent(id:any){
      
    this.student.deleteStudent(id).subscribe(res=>{
      console.log(res)
      this.studentData()
    })

  }

  // =====

  studentData(){
    this.student.getStudent().subscribe((res)=>{
      this.studentDetails = res
      console.log(res);
      
    })
  }



}

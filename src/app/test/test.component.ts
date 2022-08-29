import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  studentData:any

  ngOnInit(): void {
    
    this.studentService.loadStudent().subscribe((res)=>{
      console.log(res)
      this.studentData = res
      
    })
  }

  submitData(data:NgForm){
    console.log(data.value )

    this.studentService.postData(data.value).subscribe((res)=>{

      console.log(res)
    })
    
  }



  

}

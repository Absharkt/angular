import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId:any
  constructor(private activatedRoute:ActivatedRoute,private route : Router) { }

 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=> {
      this.courseId = params['c_id']
      console.log(this.courseId);
      
    })
    

    // this.courseId = this.activatedRoute.snapshot.params['c_id']
  }

}

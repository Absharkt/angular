import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAuthenticated : boolean = false;

  students = [
    {
      'studentName':'Abshar',
      'email': 'ahbs@gmail.com',
      'phone':'98585858',
      'class':'5',
      'division':'a'
    },
    {
      'studentName':'Amy',
      'email': 'amy@gmail.com',
      'phone':'98585858',
      'class':'5',
      'division':'a'
    },
    {
      'studentName':'rose',
      'email': 'amy@gmail.com',
      'phone':'98585858',
      'class':'5',
      'division':'a'
    },
    {
      'studentName':'ben',
      'email': 'amy@gmail.com',
      'phone':'98585858',
      'class':'5',
      'division':'a'
    },
    {
      'studentName':'ben',
      'email': 'amy@gmail.com',
      'phone':'98585858',
      'class':'5',
      'division':'a'
    },
  ]


  color = 'white'
  colspan = 2

  isHidden = true

  isFailed = false

  new = false

  username = 'jack'

  style = true

  clickMe(data:any){
    // alert('clicked')
    console.log(data.innerHTML);
    
  }
  
  
}

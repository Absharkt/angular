import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { myValidators } from '../custom-validators/space-validators';

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

  // username = 'jack'

  style = true

  clickMe(data:any){
    // alert('clicked')
    console.log(data.innerHTML);
    
  }
  

  submit(formData:any){
    console.log(formData.value);
    // console.log(this.userform.value);
    
    
  }

  username:string = ''
  password:string = ''

  userform = new FormGroup({
    uname:new FormControl('john',Validators.required),
    password: new FormControl('',myValidators.containSpace)
  })

  submitForm(){

  }

  get uname(){
    return this.userform.get('uname')
  }

  get Password(){
    return this.userform.get('password')
  }


  login(){
    if (this.userform.get('uname')?.value == 'admin'){
      this.userform.setErrors({invalidLogin:true})
    }

  }
get form(){
  return this.userform;
}

  

  // @Input() data:any  reusable comp






  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = '123'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username =='admin' && this.password == '123'){
      localStorage.setItem('token','admin')
      this.router.navigate(['home'])

    }
    else{
      alert('invalid username or password')
    }

    
  }
}

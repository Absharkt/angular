import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name :string = 'abshar'
  date = Date.now()
  rupees = '25000'
  amount = '1000'
  constructor() { }

  ngOnInit(): void {
  }

  students = ['man','mary','abshr']

  values = [50,15,30,40]

}

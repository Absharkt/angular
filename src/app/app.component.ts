import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';


  username = 'hellooo'

  sendData(value:any){
    console.log(value);
    
  }

  dt:any

  addNum(value:any){
    console.log(value);
    this.dt = value

  }

}



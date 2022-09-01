import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }


  // loadStudent() {

  //   console.log(baseUrl + 'data')
  //   return this.httpClient.get(baseUrl + 'data')
  // }

  // postData(student_data: any) {
  //   return this.httpClient.post(baseUrl + 'data', student_data)
  // }


}

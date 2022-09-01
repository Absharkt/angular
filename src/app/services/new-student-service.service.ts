import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewStudentServiceService {

  constructor(private stud_service : HttpClient) { }

  getStudent(){
    return this.stud_service.get(baseUrl+'load-students')
  }

  postStudent(student_data: any) {
    return this.stud_service.post(baseUrl + 'add-student', student_data)
  }

  deleteStudent(id:any){
    return this.stud_service.delete(baseUrl+'delete-student/'+id)
  }
  
  updateStudent(id:any,data:any){
    return this.stud_service.put(baseUrl+'student/'+id,data)
  }
}

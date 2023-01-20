import { Teacher } from './../Models/teacher.model';
import { ResponseHttp } from './../Models/responce-http';
import { Student } from './../Models/Student.model';
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Employees } from '../Models/employees.model';

@Injectable({
  providedIn:'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  /* ============================== Students   ==============================  */

 

  public findStudents(q:string,size:number,page:number,sort:string){
    return this.http.get<ResponseHttp<Student[]>>("http://localhost:5200/api/hr/eleves",{params:{q,page,size,sort}});
  }

  
  /* ============================== teachers   ==============================  */


 

public findTeachers(q:string,size:number,page:number,sort:string){
    return this.http.get<ResponseHttp<Teacher[]>>("http://localhost:5200/api/hr/teachers",{params:{q,page,size,sort}});
  }

  
  
  /* ============================== administrations   ==============================  */

  public findEmployees(q:string,size:number,page:number,sort:string){
    return this.http.get<ResponseHttp<Employees[]>>("http://localhost:5200/api/hr/employees",{params:{q,page,size,sort}});
  }


  
  public getClassRooms(){
    return this.http.get<any[]>("http://localhost:5200/api/hr/classrooms");
  }
  


  


}
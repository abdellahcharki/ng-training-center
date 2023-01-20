import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalanderService {

  constructor(private http: HttpClient) { }


  getHolidays(){

       return this.http.get<any[]>("http://localhost:5200/api/calander/holiday")
  }

}

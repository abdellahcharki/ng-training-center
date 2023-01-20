import { SortBy } from './../../enums/SortBy';
import { Employees } from './../../Models/employees.model';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  
  PAGE_SIZE:string = "emp_page_size";
  PAGE_SORT: string = "emp_page_sort";  



  employees:Employees[]=[];
  
  numberOfPages:number = 0;
  page:number = 0;
  pageSize:number=10;
  sort:string ="";
  q:string ='';

  constructor(private _users:UsersService) { }


  

  ngOnInit(): void {
    this.updatePage(this.page);
    this.pageSize=Number(localStorage.getItem(this.PAGE_SIZE))|| 10;
    this.sort = localStorage.getItem(this.PAGE_SORT)||'id';
  }


  updatePage(p:number){
    this._users.findEmployees(this.q,this.pageSize,p,this.sort).subscribe(data => {
      this.employees=data.data;
      this.numberOfPages=data.params["number_of_pages"];
      this.page=data.params['page']
     });
  }


updatePageSize(n:number){
  this.pageSize=n;
  
  localStorage.setItem(this.PAGE_SIZE,n.toString());
  this.updatePage(0);
}


  updateSort(s:string){
    this.sort = s;
    localStorage.setItem(this.PAGE_SORT,s);
    this.updatePage(this.page);
  }

  onSearch(q:string){
    this.q=q;
    this.updatePage(this.page);

  }
}

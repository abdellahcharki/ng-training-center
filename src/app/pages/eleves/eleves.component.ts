 
import { Student } from './../../Models/Student.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
 
@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss']
})
export class ElevesComponent implements OnInit {

  PAGE_SIZE:string = "eleves_page_size";
  PAGE_SORT: string = "eleves_page_sort";  


  list: Student[] = [];

  page:number = 0;
  size:number=  10;
  sort:string="id";
  numberOfPages:number= 0; 
  q:string='';


 
  constructor(private _users: UsersService) { }


  ngOnInit(): void {

    this.size= Number(localStorage.getItem(this.PAGE_SIZE)) || 10;
    this.sort = localStorage.getItem(this.PAGE_SORT) || 'id';
     


    this.updatePage(this.page);

  }

  updatePageSize(s:number){
    this.size=s;
    localStorage.setItem(this.PAGE_SIZE, s.toString() );
    this.updatePage(this.page);
 
  }

 
  updateSort(sort:string){
    this.sort=sort;
    localStorage.setItem(this.PAGE_SORT, sort );
    this.updatePage(this.page);
  }
 

  updatePage(p:number){
    
    this._users.findStudents(this.q,this.size,p,this.sort).subscribe(data=>{
 
      this.list = data.data;
      this.numberOfPages = data.params["number_of_pages"];
      this.size=data.params["size"];
 
      
    } ); 
  }


  
  onSearch(q:string){
    this.q=q;
    this.updatePage(this.page);

  }

}

import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor(private _users: UsersService) { }

  PAGE_SIZE:string = "teacher_page_size";
  PAGE_SORT: string = "teacher_page_sort";  



  teachers:any[]=[];
  
  numberOfPages:number=0;
  page=0;
  size:number = 0;
  sort:string='';
  q: string='';

  ngOnInit(): void {
    this.size = Number(localStorage.getItem(this.PAGE_SIZE)) || 10;
    this.sort = localStorage.getItem(this.PAGE_SORT)||'id';
    this.updatePage(this.page);
  
  }



  
  updatePage(p:number){ 
    
    this._users.findTeachers(this.q,this.size,p,this.sort).subscribe(data => {
      this.teachers = data.data;
      this.numberOfPages = data.params["number_of_pages"];
      this.size=data.params["size"];
     });
     
  }


  updatePageSize(s:number){
    this.size=s;
    localStorage.setItem(this.PAGE_SIZE,s.toString());
    this.updatePage(0);
     
  }


  updateSort(s:string){ 
    this.sort=s;
    localStorage.setItem(this.PAGE_SORT,s)
    this.updatePage(this.page)
    
  }
  onSearch(q:string){
    this.q=q;
    this.updatePage(this.page);

  }

}

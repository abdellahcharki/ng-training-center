import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
  styleUrls: ['./class-rooms.component.scss']
})
export class ClassRoomsComponent implements OnInit {


  constructor(private _user:UsersService,private _modal:NgbModal ) { }

  classRooms:any[]=[]


  ngOnInit(): void {

    this._user.getClassRooms().subscribe(data=>this.classRooms=data);


  }

 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {

  constructor() { }
  steps:any[]=[];

  ngOnInit(): void {
    this.steps=[
      {
        id:1,
        label:"Coordonnées",
        active:true,
        valid:true
      },

      {
        id:2,
        label:"Insriptions",
        active:false,
        valid:false
  
      },
      {
        id:3,
        label:"Validation",
        active:false,
        valid:false
      }
  
    ]

  }

}

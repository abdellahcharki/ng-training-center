import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-add',
  templateUrl: './groups-add.component.html',
  styleUrls: ['./groups-add.component.scss']
})
export class GroupsAddComponent implements OnInit {
  step=1;

  steps:any[] = [];
  sessions:any = [];

 
  journe:FormControl = new FormControl();
  time_init:FormControl = new FormControl();
  time_fin:FormControl = new FormControl();
  sall:FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.steps=[
      {
        id:1,
        label:"Group",
        active:true,
        valid:true
  
      },

      {
        id:2,
        label:"Sissions",
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

  addSission(){

  }


}

import { Component, OnInit, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit,OnChanges {

  @Input()
  data:boolean=false;

  @Input()
  link:string=''

 

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void { 

 
  }

  ngOnInit(): void {
  }

}

import { CalanderService } from './../../services/calander.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  


  constructor(private _calander:CalanderService,private modalService: NgbModal) { }

  holidays:any[]=[]


  ngOnInit(): void {

    this._calander.getHolidays().subscribe(data=>{
   
      this.holidays=data;
   
    });

  }

 
    
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        
      }, (reason) => {
        
      });
    
    }

}

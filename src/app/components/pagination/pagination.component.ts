import { Component, Input, OnInit, Output, EventEmitter, OnChanges,  SimpleChanges, } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit,OnChanges  {
	@Input()
	numberOfPages: number = 0;

	@Input()
	page: number = 0;

	@Input()
	pageSize: number = 10;

	@Output()
	onPageChanged = new EventEmitter<number>();

	pages: any[] = [];

	ngOnInit(): void { }

	arr: any[] = [];

	ngOnChanges(changes: SimpleChanges): void {
		this.page=0;
		this.updatePage( this.page);
	}

	updatePage(p: number) {
		this.page = p;
		this.onPageChanged.emit(this.page);
		this.updatePagination();
	}

 

	private updatePagination() {
		let arr: any[] = [];

		let p = this.page;
		let m = this.numberOfPages - 1;
		let n = 8; // number of pageswenn the selected page is right/left
		let x = 4; // number of pages arownd d selected page

		let a = n;
		let b = m - n;
 
		if (a <= b) {
			if (p < a) {
				// { 1 }
				for (let i = 0; i <= a; i++) arr.push(i);
				arr.push('...', m);
			}
			if (p > b) {
				arr.push(0, '...');
				for (let i = b; i <= m; i++) arr.push(i);
			}

			if (p >= a && p <= b) {
				arr.push(0, '...');
				for (let i = p - x; i <= p + x; i++) arr.push(i);
				arr.push('...', m);
			}
		} else {
			 
			for (let i = 0; i <= m; i++) arr.push(i);
		}

		this.pages = arr;
	}





}

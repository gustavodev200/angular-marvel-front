import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() previousPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();

  @Input() totalCharacters: number = 0;
  @Input() limit: number = 10;
  @Input() offset: number = 0;

  constructor() {}

  ngOnInit(): void {}

  get currentPage(): number {
    return Math.floor(this.offset / this.limit) + 1;
  }

  get totalPages(): number {
    return Math.ceil(this.totalCharacters / this.limit);
  }
  handlePreviousPage() {
    this.previousPage.emit();
  }

  handleNextPage() {
    this.nextPage.emit();
  }
}

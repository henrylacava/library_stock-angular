import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-paginate',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table-paginate.component.html',
  styleUrl: './table-paginate.component.css',
})
export class TablePaginateComponent {
  @Input({ required: true }) displayedColumns: string[] = [];
  @Input({ required: true }) dataSource: any = [];
  @Input({ required: true }) length!: number;
  @Input() pageSize: number = 10;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  handlePageEvent(e: PageEvent) {
    this.page.emit(e);
  }
}

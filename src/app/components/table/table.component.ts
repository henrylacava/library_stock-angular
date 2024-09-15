import { Component, Input } from '@angular/core';
import { PrimaryInputComponent } from '../primary-input/primary-input.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [PrimaryInputComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() fields: string[] = [];
  @Input() items: object[] = [];

  getObjectsValues(item: any): any[] {
    return Object.values(item);
  }
}

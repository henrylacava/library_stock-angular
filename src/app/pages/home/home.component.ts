import { Component } from '@angular/core';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { TableComponent } from '../../components/table/table.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoCardComponent, TableComponent, PrimaryInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

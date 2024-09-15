import { Component, OnInit } from '@angular/core';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { TableComponent } from '../../components/table/table.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CustomerService } from '../../services/customer.service';
import { TablePaginateComponent } from '../../components/table-paginate/table-paginate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InfoCardComponent,
    TableComponent,
    PrimaryInputComponent,
    TablePaginateComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  customerDisplayedColumns: string[] = ['name', 'email', 'actions'];
  customerKeys: string[] = ['name', 'email'];
  customerDataSource: any[] = [];
  customerTotalElements!: number;
  customerTotalPages!: number;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(pageIndex: number = 0, pageSize: number = 10): void {
    this.customerService.getCustomers(pageIndex, pageSize).subscribe((data) => {
      this.customerDataSource = data.customers.map((customer) => {
        customer.name = `${customer.firstName} ${customer.lastName}`;
      });
      this.customerDataSource = data.customers;
      this.customerTotalElements = data.totalElements;
      this.customerTotalPages = data.totalPages;
    });
  }
}

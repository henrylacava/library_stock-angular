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
  customerColumns: any[] = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (customer: any) => `${customer.name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (customer: any) => `${customer.email}`,
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      isAction: true,
      actions: [
        {
          label: 'Edit',
          click: (row: any) => this.editCustomer(row),
        },
        {
          label: 'Delete',
          click: (row: any) => this.deleteCustomer(row),
        },
      ],
    },
  ];
  displayedColumns = this.customerColumns.map((c) => c.columnDef);
  customerDataSource: any[] = [];
  customerTotalElements!: number;
  customerTotalPages!: number;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(pageIndex: number = 0, pageSize: number = 10): void {
    this.customerService.getCustomers(pageIndex, pageSize).subscribe((data) => {
      data.customers.map((customer) => {
        customer.name = `${customer.firstName} ${customer.lastName}`;
      });
      this.customerDataSource = data.customers;
      this.customerTotalElements = data.totalElements;
      this.customerTotalPages = data.totalPages;
    });
  }

  editCustomer(id: number) {
    console.log('editing');
  }

  deleteCustomer(id: number) {
    console.log('deleting');
  }
}

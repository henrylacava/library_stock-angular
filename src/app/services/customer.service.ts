import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getCustomers(pageIndex: number = 0, pageSize: number = 10): Observable<{
    customers: any[];
    totalElements: number;
    totalPages: number;
    isFirst: boolean;
    isLast: boolean;
  }> {
    return this.httpClient.get<{
      customers: any[];
      totalElements: number;
      totalPages: number;
      isFirst: boolean;
      isLast: boolean;
    }>(`http://localhost:8080/api/customers?page=${pageIndex}&size=${pageSize}`);
  }
}

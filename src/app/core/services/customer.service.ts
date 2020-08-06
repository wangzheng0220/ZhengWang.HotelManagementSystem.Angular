import { Customer } from './../../shared/models/customer';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService) { }

  getListCustomers(): Observable<Customer[]>{
    //http://localhost:54506/api/customer/customers
    return this.apiService.getAll('customer/customers');
  }

  getCustomerDetailsById(customerId: number): Observable<Customer>{
    //http://localhost:54506/api/customer/customerId
    return this.apiService.getOne('customer',customerId);
  }
}

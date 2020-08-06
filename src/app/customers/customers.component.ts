import { CustomerService } from './../core/services/customer.service';
import { Customer } from './../shared/models/customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.customerService.getListCustomers().subscribe((c)=>{
      this.customers = c;

      console.log(this.customers);
      
    })
  }

}

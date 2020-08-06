import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from './../../../core/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  customerId: number;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      // getting movieId from URL
      this.customerId = +params.get('id');

      this.customerService.getCustomerDetailsById(this.customerId).subscribe((m)=>{ //read data use subscribe
        this.customer = m;
        
        console.log(this.customer.id);
        console.log(this.customer);
  })
}
    )
}
}


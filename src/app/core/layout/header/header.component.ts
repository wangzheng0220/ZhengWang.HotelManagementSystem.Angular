import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customers: Customer[];
  constructor(
    
  ) { }

  ngOnInit(): void {


  }

}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {
//   NgbCarouselModule,
//   NgbCollapseModule,
//   NgbDropdownModule,
//   NgbModalModule,
//   NgbPaginationModule,
//   NgbTabsetModule,
//   NgbAlertModule,
// } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import {CustomersComponent} from './customers/customers.component';
import { CustomerDetailsComponent } from './customers/customerDetail/customer-details/customer-details.component';
//import { NgbModule} from '@ng-boostrap/ng-boostrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CustomerDetailsComponent } from './customers/customerDetail/customer-details/customer-details.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'customer/:id', component:CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

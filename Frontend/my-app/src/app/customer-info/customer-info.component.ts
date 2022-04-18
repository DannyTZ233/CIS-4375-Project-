import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../API/customers/customers.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customers: any;

  constructor(private route: Router,
    private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getCustomers()
    .subscribe((data:any)=>{
      this.customers=data.customers;
    })
  }

  deleteCustomer(customer_id: any): void {

    this.customersService.deleteCustomer(customer_id)
    .subscribe(data => {
      
      setTimeout(() => {
        this.customersService.getCustomers()
        .subscribe((data: any) => {
          this.customers = data.Customers;
        });
      }, 1000);
    });

  }

  goToAdd(){
    this.route.navigateByUrl('/add-customer');
  }

}

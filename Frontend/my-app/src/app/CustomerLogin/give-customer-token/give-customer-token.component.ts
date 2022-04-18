import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Customers } from 'src/app/API/customers/customer.model';
import { CustomersService } from 'src/app/API/customers/customers.service';

@Component({
  selector: 'app-give-customer-token',
  templateUrl: './give-customer-token.component.html',
  styleUrls: ['./give-customer-token.component.css']
})
export class GiveCustomerTokenComponent implements OnInit {
  customer:any;
  phone: any;
  source: any;
  example:any;

  constructor(private customersService: CustomersService,
    private router: Router) { }

  ngOnInit(): void {
    // this.phone = history.state.phone;
    // this.customersService.getCustomerbyPhone(this.phone)
    // .subscribe(response => {
    //   this.customer = response.map(item =>
    //     {
    //       return new Customer(
    //         item.customer_id,
    //         item.first_name,
    //         item.last_name,
    //         item.phone,
    //         item.email,
    //         item.zip,
    //         item.customer_log_in_key
    //       );
    //     });
    // });
  
    }

  goToShortSurvey(){
    this.router.navigate(['/long-survey'], {state: { customer_id: 1 }})
  }

  ngOnDestroy(){}

}

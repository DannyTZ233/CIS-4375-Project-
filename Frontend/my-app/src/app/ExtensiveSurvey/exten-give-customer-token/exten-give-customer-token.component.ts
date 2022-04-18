import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/API/customers/customers.service';

@Component({
  selector: 'app-exten-give-customer-token',
  templateUrl: './exten-give-customer-token.component.html',
  styleUrls: ['./exten-give-customer-token.component.css']
})
export class ExtenGiveCustomerTokenComponent implements OnInit {
  customer:any;
  phone: any;

  constructor(private customersService: CustomersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToShortSurvey(){
    this.router.navigate(['/long-survey'])
  }

}

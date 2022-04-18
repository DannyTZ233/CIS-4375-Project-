import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extensive-check-customer',
  templateUrl: './extensive-check-customer.component.html',
  styleUrls: ['./extensive-check-customer.component.css']
})
export class ExtensiveCheckCustomerComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  goToAdd(){
    this.router.navigate(['/add-customer'])
  }

  goToReturning(){
    this.router.navigate(['/customer-return'])
  }

}

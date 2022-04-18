import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-customer',
  templateUrl: './check-customer.component.html',
  styleUrls: ['./check-customer.component.css']
})
export class CheckCustomerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAdd(){
    this.router.navigate(['/add-customer'])
  }

  goToReturning(){
    this.router.navigate(['/customer-return'])
  }



}

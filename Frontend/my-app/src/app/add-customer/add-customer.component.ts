import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CustomersService } from 'src/app/API/customers/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  angForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private customersService: CustomersService
  ) { 

    this.angForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      zip: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addCustomer(forms: any){
    this.customersService.postCustomers(
      this.angForm.value.first_name, 
      this.angForm.value.last_name, 
      this.angForm.value.phone, 
      this.angForm.value.email, 
      this.angForm.value.zip)
      .pipe(first())
      .subscribe( data => {
        this.route.navigate(['/give-customer-token'], { state: { phone:this.angForm.value.phone } })
      });
  }

  goBack(){
    this.route.navigate(['/check-customer'])
  }

  ngOnDestroy(){}

}

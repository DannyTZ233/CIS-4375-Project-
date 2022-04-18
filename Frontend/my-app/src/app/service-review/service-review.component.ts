import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CustomersService } from '../API/customers/customers.service';
import { ServiceReviewsService } from '../API/serviceReviews/service-reviews.service';
import{RatingsService} from '../API/ratings/ratings.service';

@Component({
  selector: 'app-service-review',
  templateUrl: './service-review.component.html',
  styleUrls: ['./service-review.component.css']
})
export class ServiceReviewComponent implements OnInit {

  angForm : FormGroup;
  customer_id: any;
  first_name: any;
  last_name: any;
  myCustomer: any;
  rating: any;
  RatingsList: any;
  n: any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private servicesService: ServiceReviewsService,
    private customersService: CustomersService,
    private ratingsService: RatingsService,
  ) { 
    
    this.angForm = this.fb.group({

      service_review_question_id: ['', Validators.required],
      rating_id: ['', Validators.required],
      emp_id: ['', Validators.required],
      customer_id: 1,
  }) }

  ngOnInit(): void {

    this.ratingsService.getRatings().subscribe((data: any) =>{
      this.RatingsList = data.ratings
    })

    // this.first_name = history.state.fName;
    // this.last_name = history.state.lName;

    // this.customersService.getCustomerbyName(this.first_name,this.last_name).subscribe((data:any)=>{
    //   this.myCustomer=data.custid[0].customer_id;
    //   this.customer_id = this.myCustomer[0];
    //   console.log(this.customer_id)
    // })
  }

  submitService(forms: any){
    this.servicesService.postServiceRevs(
      this.n, 
      this.angForm.value.rating_id, 
      this.angForm.value.emp_id, 
      this.customer_id,
    ).pipe(first())
    .subscribe( data => {
      this.n++
    });
  }

  changeRating(e:any){
    this.rating=e.target.value;
  }

  finalSubmit(){
    this.route.navigate([''])
  }



}

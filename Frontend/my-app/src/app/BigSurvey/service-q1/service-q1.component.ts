import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RatingsService } from 'src/app/API/ratings/ratings.service';
import { ServiceReviewsService } from 'src/app/API/serviceReviews/service-reviews.service';

@Component({
  selector: 'app-service-q1',
  templateUrl: './service-q1.component.html',
  styleUrls: ['./service-q1.component.css']
})
export class ServiceQ1Component implements OnInit {

  angForm : FormGroup;
  ratingList: any;
  selectedRating: any;
  customer_id: any;
  service_review_question_id: any;
  rating_id: any;

  
  constructor(private fb: FormBuilder,
    private route: Router,
    private servicesService: ServiceReviewsService,
    private ratingService: RatingsService
    ) { 

      this.angForm = this.fb.group({
        service_review_question_id: ['', Validators.required],
        rating_id: ['', Validators.required],
        emp_id: ['', Validators.required],
        customer_id: ['', Validators.required]
      })
    }

    ngOnInit(): void {
      this.customer_id = 1;
      this.service_review_question_id=1;
      // this.ratingService.getRatings().subscribe((data:any) =>{
      //   this.ratingList=data.ratings;
      // })
      this.rating_id=2;
    }

  submitRatings(){
    console.log(this.customer_id)
    this.servicesService.postServiceRevs(
    this.service_review_question_id,

    this.rating_id,
    //this.angForm.value.ratings,
    this.angForm.value.emp_id,
    //this.emp_id,
    this.customer_id,
    )
    .pipe(first())
    .subscribe( data =>{
      this.route.navigate(['/service-q2'])
    })
  }
  changeRating(e:any){
    this.selectedRating=e.target.value;
  }

}

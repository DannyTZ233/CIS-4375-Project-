import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { EnvReviewsService } from 'src/app/API/envReviews/env-reviews.service';
import { RatingsService } from 'src/app/API/ratings/ratings.service';

@Component({
  selector: 'app-environment-q1',
  templateUrl: './environment-q1.component.html',
  styleUrls: ['./environment-q1.component.css']
})
export class EnvironmentQ1Component implements OnInit {
  
  angForm : FormGroup;
  ratingList: any;
  selectedRating: any;
  customer_id: any;
  question_id: any;
  rating_id:any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private environmentServices: EnvReviewsService,
    private ratingService: RatingsService) {
      this.angForm = this.fb.group({
        question_id: ['', Validators.required],
        rating_id: ['', Validators.required],
        customer_id: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    
    
      this.question_id=1;
      this.rating_id = 2;
      this.customer_id = 1;
      //this.ratingService.getRatings().subscribe((data:any) =>{
      //this.ratingList=data.ratings;
      
  //})
}

  submitRatings(){
    this.environmentServices.postEnvReviews(
    this.question_id,
    this.angForm.value.ratings,
    this.customer_id,
    )
    .pipe(first())
    .subscribe( data =>{
      this.route.navigate(['/environment-q1'])
    })
  }

  changeRating(e:any){
    this.selectedRating=e.target.value;
  }
}

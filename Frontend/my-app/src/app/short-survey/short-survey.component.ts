import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CustShortReviewsService } from '../API/custShortReviews/cust-short-reviews.service';
import { RatingsService } from '../API/ratings/ratings.service';

@Component({
  selector: 'app-short-survey',
  templateUrl: './short-survey.component.html',
  styleUrls: ['./short-survey.component.css']
})
export class ShortSurveyComponent implements OnInit {
  angForm : FormGroup;
  ratingList: any;
  selectedRating: any;
  customer_id: any;
  myid: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private surveyService: CustShortReviewsService,
    private ratingService: RatingsService
  ) {

    this.angForm = this.fb.group({
      question_id: ['', Validators.required],
      ratings: ['', Validators.required],
      customer_id: ['', Validators.required],
      comment: ''
    })
   }

  ngOnInit(): void {
    this.customer_id = history.state.customer_id;
    this.myid = 1;
    this.ratingService.getRatings().subscribe((data:any) =>{
      this.ratingList=data.ratings;
    })
  }

  submitSurvey(forms: any){
    console.log(this.customer_id)
    this.surveyService.postCustShortReviews(
    this.myid,
    this.angForm.value.ratings,
    this.customer_id,
    this.angForm.value.comment)
    .pipe(first())
    .subscribe( data =>{
      this.router.navigate(['/customer-reward'],  {state: { customer_id:this.customer_id }})
    })
  }

  goBack(){
    this.router.navigate(['/check-customer'])
  }

  changeRating(e:any){
    this.selectedRating=e.target.value;
  }
  
  ngOnDestroy(){}

}

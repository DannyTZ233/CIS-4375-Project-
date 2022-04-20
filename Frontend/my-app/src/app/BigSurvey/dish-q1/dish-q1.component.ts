import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { RatingsService } from 'src/app/API/ratings/ratings.service';
import{DishReviewsService} from 'src/app/API/dishReviews/dish-reviews.service'

@Component({
  selector: 'app-dish-q1',
  templateUrl: './dish-q1.component.html',
  styleUrls: ['./dish-q1.component.css']
})
export class DishQ1Component implements OnInit {

  angForm : FormGroup;
  rating_id: any;
  selectedRating: any;
  customer_id: any;
  question_id: any;
  dish_id: any;

  constructor(private fb: FormBuilder,
    private route: Router,
    private dishService: DishReviewsService,
    private ratingService: RatingsService) {
      this.angForm = this.fb.group({
        question_id: ['', Validators.required],
        rating_id: ['', Validators.required],
        dish_id: ['', Validators.required],
        customer_id: ['', Validators.required]
      })
    }


  ngOnInit(): void {
    this.question_id=1;
    this.rating_id=3;
  //   this.ratingService.getRatings().subscribe((data:any) =>{
  //   this.ratingList=data.ratings;
  // })
    this.dish_id = 14;
    this.customer_id = 1;
  }

  submitRatings(){
    this.dishService.postDishRevs(
    this.question_id,
    this.rating_id,
    //this.angForm.value.ratings,
    this.dish_id,
    this.customer_id,
    )
    .pipe(first())
    .subscribe( data =>{
      this.route.navigate(['/'])
    })
  }
  
  changeRating(e:any){
    this.selectedRating=e.target.value;
  }
  }




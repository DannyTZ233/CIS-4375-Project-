import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RatingsService } from '../API/ratings/ratings.service';
import { ServiceReviewQsService } from '../API/serviceReviewQs/service-review-qs.service';
import { ServiceReviewsService } from '../API/serviceReviews/service-reviews.service';
import { EnvReviewQsService } from '../API/envReviewQs/env-review-qs.service';
import { EnvReviewsService } from '../API/envReviews/env-reviews.service';
import { DishReviewQsService } from '../API/dishReviewQs/dish-review-qs.service';
import { DishReviewsService } from '../API/dishReviews/dish-reviews.service';

@Component({
  selector: 'app-long-survey',
  templateUrl: './long-survey.component.html',
  styleUrls: ['./long-survey.component.css']
})
export class LongSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

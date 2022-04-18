import { Component, OnInit } from '@angular/core';
import { CustShortReviewsService } from 'src/app/API/custShortReviews/cust-short-reviews.service';

@Component({
  selector: 'app-survey-info',
  templateUrl: './survey-info.component.html',
  styleUrls: ['./survey-info.component.css']
})
export class SurveyInfoComponent implements OnInit {

  surveys: any

  constructor(private reviewsService: CustShortReviewsService) { }

  ngOnInit(): void {
    this.reviewsService.getCustShortReviews()
    .subscribe((data:any)=>{
      this.surveys=data.surveys;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BubbleController, ChartData, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { CountZipcodeService } from '../API/surveyReport/zipcodeReport/zipcode-count.service';
import {CountFoodRating} from '../API/surveyReport/foodRatingReport/food-rating.service';
import {CountEnvironmentRating} from '../API/surveyReport/envRatingReport/environment-rating.service';
import { CountServiceRating } from '../API/surveyReport/serviceReport/service-rating.service';
import { CountOverallRating } from '../API/surveyReport/overallRatingReport/overall-rating.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  zipcode : any;  
  food_rating: any;
  env_rating: any;
  service_rating: any;
  over_all_serv_rating: any;


  constructor(private route: Router,
    private zipCount: CountZipcodeService,
    private foodRatingCount:CountFoodRating,
    private envRatingCount: CountEnvironmentRating,
    private serviceRatingCount: CountServiceRating,
    private overallRatingCount: CountOverallRating
     ) { }


  ngOnInit(): void {
    this.zipCount.getZipCount()
    .subscribe((data:any)=>{
      this.zipcode=data.zipcode;
    })

    this.foodRatingCount.getFoodRating()
    .subscribe((data:any)=>{
      this.food_rating=data.food_rating;
    })

    this.envRatingCount.getEnvironmentRating()
    .subscribe((data:any)=>{
        this.env_rating=data.env_rating
      })

    this.serviceRatingCount.getServiceRating()
    .subscribe((data:any)=>{
      this.service_rating=data.service_rating
    })

    this.overallRatingCount.getOverallRating()
    .subscribe((data:any)=>{
      this.over_all_serv_rating=data.over_all_serv_rating
    })

  }
  

  /* -----------------------when service rating button clicked- will display data underneath--------------------------------------------------- */
  ServiceR= false;
  clickServiceR(){
    this.ServiceR=!this.ServiceR;
  }


/* -----------------------Enviroment Reviews--------------------------------------------------- */
  // enviroment reviews button
  EnvironmentR= false;
  clickEnvironmentR(){
    this.EnvironmentR=!this.EnvironmentR;
  }



/* -----------------------Dish Reviews--------------------------------------------------- */

  FoodR=false;
  clickFoodR(){
    this.FoodR =!this.FoodR;
  }


/* -----------------------Zipcode Count Report--------------------------------------------------- */
  // zipcode report button
  zipcodebutton=false;
  clickZipcodeE(){
    this.zipcodebutton=!this.zipcodebutton;
  }

// -------------------------- Short survey reviews ------------

// button for short survey
overallR=false;
clickOverallR(){
  this.overallR=!this.overallR;
}


 
}
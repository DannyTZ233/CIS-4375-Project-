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

  // bar graph - service ratings 
  servicedata: ChartData<'line'> = {
    labels: ['Accuracy', 'Speed', 'Quality', 'Staff Friendliness'],
    datasets: [
      { label: 'Strongly Satisfied', data: [50, 85, 75, 75 ], tension: 0.5 },
      { label: 'Satisfied', data: [50,75,50,75], tension: 0.5 },
      { label: 'Neutral', data: [25, 75, 30, 25], tension: 0.5 },
      { label: 'Dissatisfied', data: [20, 25, 15, 10], tension: 0.5 },
      { label: 'Strongly Dissatisfied', data: [15, 25, 10, 2], tension: 0.5 },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Service Reviews',
      },
    },
    maintainAspectRatio: false
  };

/* -----------------------Enviroment Reviews--------------------------------------------------- */
  // enviroment reviews button
  EnvironmentR= false;
  clickEnvironmentR(){
    this.EnvironmentR=!this.EnvironmentR;
  }

//env. review bar graph
  envdata: ChartData<'line'> = {
    labels: ['Cleanliness', 'Ambiance'],
  datasets: [
    { label: 'Strongly Satisfied', data: [100, 90 ], tension: 0.5 },
    { label: 'Satisfied', data: [85,85], tension: 0.5 },
    { label: 'Neutral', data: [75, 25], tension: 0.5 },
    { label: 'Dissatisfied', data: [65, 75], tension: 0.5 },
    { label: 'Strongly Dissatisfied', data: [25,35], tension: 0.5 },
  ],
};
  Options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Enviroment Reviews',
      },
    },
    maintainAspectRatio: false
  };


/* -----------------------Dish Reviews--------------------------------------------------- */

  FoodR=false;
  clickFoodR(){
    this.FoodR =!this.FoodR;
  }




  //  dish review bar graph
  dishdata: ChartData<'line'> = {
    labels: ['Strongly Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Strongly Dissatisfied'],
  datasets: [
    { label: 'Food Quality', data: [100, 90, 95, 25, 30  ], tension: 0.5 },

  ],

};
  baropt: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Food Quality Reviews',
      },
    },
    
    
  };


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

// short survey review zipcode
shortReview: ChartData<'line'> = {
  labels: ['Strongly Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Strongly Dissatisfied'],
datasets: [
  { label: 'Total Count', data: [10, 5, 25, 5, 0  ], tension: 0.5 },

],

};
shortRopt: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Short Survey reviews',
    },
  },
  maintainAspectRatio: false,
  
};
 
}
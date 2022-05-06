import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BubbleController, ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { CountZipcodeService } from '../API/surveyReport/zipcodeReport/zipcode-count.service';
import {CountFoodRating} from '../API/surveyReport/foodRatingReport/food-rating.service';
import {CountEnvironmentRating} from '../API/surveyReport/envRatingReport/environment-rating.service';
import { CountServiceRating } from '../API/surveyReport/serviceReport/service-rating.service';
import { CountOverallRating } from '../API/surveyReport/overallRatingReport/overall-rating.service';
import { WordcloudService } from '../wordcloud.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  zipcode : any;  
  food_rating: any;
  env_rating: any;
  service_rating: any;
  over_all_serv_rating: any;
  image:any;

  public envChartData: ChartDataset[] = [
    {data:[], label:'Responses'}
  ];

  public envlabels: any[] = [];
  public envoptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public servChartData: ChartDataset[] = [
    {data:[], label:'Responses'}
  ];

  public servlabels: any[] = [];
  public servoptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public foodChartData: ChartDataset[] = [
    {data:[], label:'Responses'}
  ];

  public foodlabels: any[] = [];
  public foodoptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public allChartData: ChartDataset[] = [
    {data:[], label:'Responses'}
  ];

  public alllabels: any[] = [];
  public alloptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public zipChartData: ChartDataset[] = [
    {data:[], label:'Responses'}
  ];

  public ziplabels: any[] = [];
  public zipoptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }


  constructor(private route: Router,
    private zipCount: CountZipcodeService,
    private foodRatingCount:CountFoodRating,
    private envRatingCount: CountEnvironmentRating,
    private serviceRatingCount: CountServiceRating,
    private overallRatingCount: CountOverallRating,
    private wordCloudService: WordcloudService
     ) { }


  ngOnInit(): void {
    this.zipCount.getZipCount()
    .subscribe((data:any)=>{
      this.zipcode=data.zipcode;
      for(let i=0; i<data.zipcode.length-1;i++){
        this.ziplabels.push(data.zipcode[i].zip_code)
      this.zipChartData[0].data.push(data.zipcode[i].total_count)
      }
      this.chart?.update();
    })

    this.foodRatingCount.getFoodRating()
    .subscribe((data:any)=>{
      this.food_rating=data.food_rating;
      for(let i=0; i<data.food_rating.length-1;i++){
        this.foodlabels.push(data.food_rating[i].food_rating)
      this.foodChartData[0].data.push(data.food_rating[i].total_count)
      }
      this.chart?.update();
    })

    this.envRatingCount.getEnvironmentRating()
    .subscribe((data:any)=>{
        this.env_rating=data.env_rating
        for(let i=0; i<data.env_rating.length-1;i++){
          this.envlabels.push(data.env_rating[i].environment_rating)
        this.envChartData[0].data.push(data.env_rating[i].total_count)
        }
        this.chart?.update();
      })

    this.serviceRatingCount.getServiceRating()
    .subscribe((data:any)=>{
      this.service_rating=data.service_rating
      for(let i=0; i<data.service_rating.length-1;i++){
        this.servlabels.push(data.service_rating[i].service_rating)
      this.servChartData[0].data.push(data.service_rating[i].total_count)
      }
      this.chart?.update();
    })

    this.overallRatingCount.getOverallRating()
    .subscribe((data:any)=>{
      this.over_all_serv_rating=data.over_all_serv_rating
      for(let i=0; i<data.over_all_serv_rating.length-1;i++){
        this.alllabels.push(data.over_all_serv_rating[i].over_all_rating)
      this.allChartData[0].data.push(data.over_all_serv_rating[i].total_count)
      }
      this.chart?.update();
    })

    this.wordCloudService.getWordCloud()
    .subscribe((data:any)=>{
      this.image = data.wordcloud_data
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

//button for wordcloud
showWordcloud=false;
clickWordcloud(){
  this.showWordcloud=!this.showWordcloud;
}


 
}
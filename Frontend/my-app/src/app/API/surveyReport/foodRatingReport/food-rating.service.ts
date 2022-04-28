import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../../env';
import { map } from 'rxjs';
import { FoodRating } from './food-rating.model';

@Injectable({
  providedIn: 'root'
})
export class CountFoodRating {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getFoodRating(){
    return this.http.get<FoodRating[]>(this.baseUrl+'/customer-survey/report?food=1')
  }


}
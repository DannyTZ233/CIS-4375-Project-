import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { DishReviews } from './dishReviews.model';

@Injectable({
  providedIn: 'root'
})
export class DishReviewsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getDishReviews(){
    return this.http.get<DishReviews>(this.baseUrl+'/dish-reviews')
  }

  postDishReviews(){}
  updateDishReviews(){}
  deleteDishReviews(){}
}

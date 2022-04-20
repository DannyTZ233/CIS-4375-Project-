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

  postDishRevs(question_id:any, rating_id:any, dish_id:any, customer_id:any){
    return this.http.post<any>(this.baseUrl+'/dish-reviews',
    {question_id, rating_id,dish_id, customer_id})
    .pipe(map(DishReviews => {
      return DishReviews;
    }))
  }
  updateDishReviews(){}
  deleteDishReviews(){}
}

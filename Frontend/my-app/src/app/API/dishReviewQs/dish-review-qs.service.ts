import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { DishReviewQs } from './dishReviewQs.model';

@Injectable({
  providedIn: 'root'
})
export class DishReviewQsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getDishReviewQs(){
    return this.http.get<DishReviewQs>(this.baseUrl+'/dish-review-questions')
  }

  postDishReviewQs(){}
  updateDishReviewQs(){}
  deleteDishReviewQs(){}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { DishCategories } from './dishCategories.model';

@Injectable({
  providedIn: 'root'
})
export class DishCategoriesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getDishCategories(){
    return this.http.get<DishCategories>(this.baseUrl+'/dish_categories')
  }

  postDishCategories(){}
  updateDishCategories(){}
  deleteDishCategories(){}
}

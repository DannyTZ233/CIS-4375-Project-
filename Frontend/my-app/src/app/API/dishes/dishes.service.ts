import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { Dishes } from './dishes.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getDishes(){
    return this.http.get<Dishes>(this.baseUrl+'/dishes')
  }

  postDishes(){}
  updateDishes(){}
  deleteDishes(){}
}

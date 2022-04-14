import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { Ratings } from './ratings.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getRatings(){
    return this.http.get<Ratings>(this.baseUrl+'/ratings')
  }

  postRatings(){}
  updateRatings(){}
  deleteRatings(){}
}

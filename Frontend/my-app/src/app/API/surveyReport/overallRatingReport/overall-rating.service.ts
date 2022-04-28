import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../../env';
import { map } from 'rxjs';
import { OverallRating } from './overall-rating.model';

@Injectable({
  providedIn: 'root'
})
export class CountOverallRating {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getOverallRating(){
    return this.http.get<OverallRating[]>(this.baseUrl+'/customer-survey/report?overall=1')
  }


}
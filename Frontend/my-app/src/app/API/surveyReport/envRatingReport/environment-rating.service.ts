import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../../env';
import { map } from 'rxjs';
import { EnvironmentRating } from './environment-rating.model';

@Injectable({
  providedIn: 'root'
})
export class CountEnvironmentRating {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEnvironmentRating(){
    return this.http.get<EnvironmentRating[]>(this.baseUrl+'/customer-survey/report?env=1')
  }


}
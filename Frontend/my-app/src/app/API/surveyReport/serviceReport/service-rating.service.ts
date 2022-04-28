import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../../env';
import { map } from 'rxjs';
import { ServiceRating } from './service-rating.model';

@Injectable({
  providedIn: 'root'
})
export class CountServiceRating {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getServiceRating(){
    return this.http.get<ServiceRating[]>(this.baseUrl+'/customer-survey/report?service=1')
  }


}
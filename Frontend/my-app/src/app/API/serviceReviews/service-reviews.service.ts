import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { ServiceReviews } from './serviceReviews.model'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceReviewsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getServiceRevs(){
    return this.http.get<ServiceReviews>(this.baseUrl+'/service-reviews')
  }

  postServiceRevs(){}
  updateServiceRevs(){}
  deleteServiceRevs(){}
}
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
    return this.http.get<ServiceReviews[]>(this.baseUrl+'/service-reviews')
  }

  postServiceRevs(service_review_question_id:any, rating_id:any, emp_id:any, customer_id:any){
    return this.http.post<any>(this.baseUrl+'/service-reviews',
    {service_review_question_id, customer_id,rating_id, emp_id})
    .pipe(map(ServiceReviews => {
      return ServiceReviews;
    }))
  }

  updateServiceRevs(){}
  deleteServiceRevs(){}
}
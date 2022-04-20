import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EnvReviews } from './envReviews.model';

@Injectable({
  providedIn: 'root'
})
export class EnvReviewsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEnvReviews(){
    return this.http.get<EnvReviews>(this.baseUrl+'/env-reviews')
  }

  postServiceRevs(service_review_question_id:any, rating_id:any, emp_id:any, customer_id:any){
    return this.http.post<any>(this.baseUrl+'/service-reviews',
    {service_review_question_id, customer_id,rating_id, emp_id})
    .pipe(map(ServiceReviews => {
      return ServiceReviews;
    }))
  }

  postEnvReviews(question_id: any, rating_id: any, customer_id: any){
    return this.http.post<any>(this.baseUrl+'/env-review',
    {question_id, rating_id,customer_id})
    .pipe(map(EnvReviews => {
      return EnvReviews;
    }))
  }
  updateEnvReviews(){}
  deleteEnvReviews(){}
}

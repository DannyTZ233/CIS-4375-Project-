import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { CustPoints } from './custPoints.model';

@Injectable({
  providedIn: 'root'
})
export class CustPointsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustPoints(){
    return this.http.get<CustPoints>(this.baseUrl+'/customer-points')
  }

  postCustShortReviews(question_id:any, rating_id:any, customer_id:any, comments: any){
    return this.http.post<any>(this.baseUrl+'/customer-short-reviews',
    {question_id, rating_id, customer_id, comments})
    .pipe(map(CustShortRevPost =>{
      return CustShortRevPost;
    }))
  }

  postCustPoints(customer_id:any, reward_id:any){
    return this.http.post<any>(this.baseUrl +'customer-point',
    {customer_id, reward_id})
    .pipe(map(CustPoints =>{
      return CustPoints;
    }))
  }
  updateCustPoints(){}
  deleteCustPoints(){}
}

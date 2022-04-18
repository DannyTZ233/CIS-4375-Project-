import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map, Observable } from 'rxjs';
import { CustShortReviews } from './custShortReviews.model';
import { CustShortRevAPI } from './custShortRevAPI.model';
import { CustShortRevPost } from './custShortRevPost.model';


@Injectable({
  providedIn: 'root'
})
export class CustShortReviewsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustShortReviews(){
    return this.http.get<CustShortRevAPI[]>(this.baseUrl+'/customer-short-reviews')
  }

  getCustShortReviewById(review_id: number) : Observable<CustShortRevAPI> {
    return this.http.get<CustShortRevAPI>(this.baseUrl + `/customer-short-reviews/${review_id}`)
  }

  postCustShortReviews(question_id:any, rating_id:any, customer_id:any, comments: any){
    return this.http.post<any>(this.baseUrl+'/customer-short-review',
    {question_id, rating_id, customer_id, comments})
    .pipe(map(CustShortRevPost =>{
      return CustShortRevPost;
    }))
  }
  updateCustShortReviews(){}
  deleteCustShortReviews(){}
}

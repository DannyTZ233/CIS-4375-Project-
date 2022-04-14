import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { CustShortReviews } from './custShortReviews.model';

@Injectable({
  providedIn: 'root'
})
export class CustShortReviewsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustShortReviews(){
    return this.http.get<CustShortReviews>(this.baseUrl+'/customer-short-reviews')
  }

  postCustShortReviews(){}
  updateCustShortReviews(){}
  deleteCustShortReviews(){}
}

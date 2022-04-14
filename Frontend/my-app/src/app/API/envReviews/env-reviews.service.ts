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

  postEnvReviews(){}
  updateEnvReviews(){}
  deleteEnvReviews(){}
}

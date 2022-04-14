import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EnvReviewQs } from './envReviewQs.model';

@Injectable({
  providedIn: 'root'
})
export class EnvReviewQsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEnvReviewQs(){
    return this.http.get<EnvReviewQs>(this.baseUrl+'/env-review-questions')
  }

  postEnvReviewQs(){}
  updateEnvReviewQs(){}
  deleteEnvReviewQs(){}
}

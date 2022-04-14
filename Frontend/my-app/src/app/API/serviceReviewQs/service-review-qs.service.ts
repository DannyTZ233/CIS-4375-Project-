import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { ServiceReviewQs } from './serviceReviewQs.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceReviewQsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getServiceRevQs(){
    return this.http.get<ServiceReviewQs>(this.baseUrl+'/ser-review-questions')
  }

  postServiceRevQs(){}
  updateServiceRevQs(){}
  deleteServiceRevQs(){}
}

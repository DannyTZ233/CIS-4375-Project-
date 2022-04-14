import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import {ShortReviewQs} from './shortReviewQs.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortReviewQsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getShortRevQs(){
    return this.http.get<ShortReviewQs>(this.baseUrl+'/questions')
  }

  postShortRevQs(){}
  updateShortRevQs(){}
  deleteShortRevQs(){}
}
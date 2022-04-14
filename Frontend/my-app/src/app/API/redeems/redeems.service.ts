import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { Redeems } from './redeems.model'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedeemsService {

  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getRedeems(){
    return this.http.get<Redeems>(this.baseUrl+'/redeems')
  }

  postRedeems(){}
  updateRedeems(){}
  deleteRedeems(){}
}

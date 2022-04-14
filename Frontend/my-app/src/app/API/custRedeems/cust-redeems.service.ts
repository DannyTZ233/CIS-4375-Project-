import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { CustRedeems } from './custRedeems.model';

@Injectable({
  providedIn: 'root'
})
export class CustRedeemsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustRedeems(){
    return this.http.get<CustRedeems>(this.baseUrl+'/cus-redeems')
  }

  postCustRedeems(){}
  updateCustRedeems(){}
  deleteCustRedeems(){}
}

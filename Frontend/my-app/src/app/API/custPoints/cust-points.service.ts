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

  postCustPoints(){}
  updateCustPoints(){}
  deleteCustPoints(){}
}

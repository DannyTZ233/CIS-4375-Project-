import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { Zipcodes } from './zipcode-report.model';

@Injectable({
  providedIn: 'root'
})
export class CountZipcodeService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getZipCount(){
    return this.http.get<Zipcodes[]>(this.baseUrl+'/customer/zip-data')
  }


}
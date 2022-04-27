import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { SurveyReport } from './survey-report.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyDataReport {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getSurveryReport(){
    return this.http.get<SurveyReport[]>(this.baseUrl+'/customer/survey-data')
  }


}
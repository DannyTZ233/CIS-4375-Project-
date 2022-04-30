import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  baseURL:string = API_URL;

  constructor(private http: HttpClient) { }

  getSurveys(){
    return this.http.get<any>(this.baseURL+'/customer-survey')
  }

  postSurvey(data: any){
    return this.http.post<any>(this.baseURL+'customer-survey', data);
  }
}

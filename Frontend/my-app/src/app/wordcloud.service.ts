import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './env';

@Injectable({
  providedIn: 'root'
})
export class WordcloudService {

  baseURL:string = API_URL;

  constructor(private http: HttpClient) { }

  getWordCloud(){
    return this.http.get<any>(this.baseURL+'customer-survey/report?wordcloud=1')
  }
}

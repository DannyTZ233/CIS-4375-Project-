import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { JobTitles } from './jobTitles.model';

@Injectable({
  providedIn: 'root'
})
export class JobTitlesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getJobTitles(){
    return this.http.get<JobTitles>(this.baseUrl+'/job-titles')
  }

  postJobTitles(){}
  updateJobTitles(){}
  deleteJobTitles(){}
}

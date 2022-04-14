import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { Rewards } from './rewards.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getRewards(){
    return this.http.get<Rewards>(this.baseUrl+'/rewards')
  }

  postRewards(){}
  updateRewards(){}
  deleteRewards(){}
}

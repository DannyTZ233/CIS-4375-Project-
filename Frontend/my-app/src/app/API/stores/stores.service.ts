import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import {Stores} from './stores.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getStores(){
    return this.http.get<Stores>(this.baseUrl+'/stores')
  }

  postStores(){}
  updateStores(){}
  deleteStores(){}
}
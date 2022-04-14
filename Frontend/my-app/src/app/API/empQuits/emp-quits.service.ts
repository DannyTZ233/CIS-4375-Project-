import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpQuits } from './empQuits.model';

@Injectable({
  providedIn: 'root'
})
export class EmpQuitsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpQuits(){
    return this.http.get<EmpQuits>(this.baseUrl+'/employee-quits')
  }

  postEmpQuits(){}
  updateEmpQuits(){}
  deleteEmpQuits(){}
}

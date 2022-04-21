import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpSchedules } from './empSchedules.model';


@Injectable({
  providedIn: 'root'
})
export class EmpSchedulesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpSchedules(){
    return this.http.get<EmpSchedules>(this.baseUrl+'/employee-schedules')
  }

  postEmpSchedules(){
    return this.http.get<EmpSchedules>(this.baseUrl+'/employee-schedules-checkin')
  }
  updateEmpSchedules(){
    return this.http.get<EmpSchedules>(this.baseUrl+'/employee-schedules-checkout')
  }
  deleteEmpSchedules(){}
}

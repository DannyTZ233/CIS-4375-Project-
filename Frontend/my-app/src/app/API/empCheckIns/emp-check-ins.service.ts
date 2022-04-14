import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpCheckIns } from './empCheckIns.model';

@Injectable({
  providedIn: 'root'
})
export class EmpCheckInsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpCheckIns(){
    return this.http.get<EmpCheckIns>(this.baseUrl+'/employee-check-ins')
  }

  postEmpCheckIns(){}
  updateEmpCheckIns(){}
  deleteEmpCheckIns(){}
}

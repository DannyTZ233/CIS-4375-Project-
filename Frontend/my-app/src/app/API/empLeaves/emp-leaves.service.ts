import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpLeaves } from './empLeaves.model';

@Injectable({
  providedIn: 'root'
})
export class EmpLeavesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpLeaves(){
    return this.http.get<EmpLeaves>(this.baseUrl+'/employee-leaves')
  }

  postEmpLeaves(){}
  updateEmpLeaves(){}
  deleteEmpLeaves(){}
}

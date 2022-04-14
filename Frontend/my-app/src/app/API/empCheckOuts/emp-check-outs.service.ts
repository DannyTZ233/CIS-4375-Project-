import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpCheckOuts } from './empCheckOuts.model';

@Injectable({
  providedIn: 'root'
})
export class EmpCheckOutsService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpCheckOuts(){
    return this.http.get<EmpCheckOuts>(this.baseUrl+'/employee-check-outs')
  }

  postEmpCheckOuts(){}
  updateEmpCheckOuts(){}
  deleteEmpCheckOuts(){}
}

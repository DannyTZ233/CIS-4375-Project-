import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpReplies } from './empReplies.model';
import { EmpRepliesAPI } from './empRepliesAPI.model';

@Injectable({
  providedIn: 'root'
})
export class EmpRepliesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpReplies(){
    return this.http.get<EmpRepliesAPI[]>(this.baseUrl+'/emp-replies')
  }

  postEmpReplies(emp_id: any, customer_id: any, responses: any){
    return this.http.post<any>(this.baseUrl+'/emp-reply',
    {emp_id, customer_id, responses})
    .pipe(map(EmpReplies => {
      return EmpReplies;
    }))
  }
  updateEmpReplies(){}
  deleteEmpReplies(){}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { EmpReplies } from './empReplies.model';

@Injectable({
  providedIn: 'root'
})
export class EmpRepliesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmpReplies(){
    return this.http.get<EmpReplies>(this.baseUrl+'/emp-replies')
  }

  postEmpReplies(){}
  updateEmpReplies(){}
  deleteEmpReplies(){}
}

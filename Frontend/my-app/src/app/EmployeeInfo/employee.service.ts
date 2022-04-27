import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Employee } from './employee.model';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string = API_URL;

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<any>(this.baseURL+'/employee?employees=all')
  }

  postEmployee(data: any){
    return this.http.post<any>(this.baseURL+'employee', data);
  }

  putEmployee(data:any, id: number){
    return this.http.put<any>(this.baseURL+`employee?id=${id}`, data)
  }

  quitEmployee(data: any, id: number){
    return this.http.put<any>(this.baseURL+`employee?id=${id}&quit=1`, data)
  }
}
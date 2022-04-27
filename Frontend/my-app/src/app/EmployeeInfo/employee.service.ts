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

  // postEmployees(e_first_name:any, e_last_name:any, e_phone:any, e_email:any, job_title:any, store_id:any){
  //   return this.http.post<any>(this.baseURL+'employee',
  //   {e_first_name, e_last_name, e_phone, e_email, job_title, store_id})
  //   .pipe(map(Employees => {
  //     return Employees;
  //   }))
  // }

  postEmployee(data: any){
    return this.http.post<any>(this.baseURL+'employee', data);
  }

  putEmployee(data:any, id: number){
    return this.http.put<any>(this.baseURL+`employee?id=${id}`, data)
  }
}
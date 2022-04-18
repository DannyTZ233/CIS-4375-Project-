import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { Employees } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getEmployees(){
    return this.http.get<Employees[]>(this.baseUrl+'/employees')
  }

  postEmployees(e_first_name:any, e_last_name:any, e_phone:any, e_email:any, join_date:any, quit_date:any, e_comment:any, employee_quit_id:any, job_title_id: any, store_id: any ){
    return this.http.post<any>(this.baseUrl+'/employee',
    {e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id })
    .pipe(map(Employees => {
      return Employees;
    }))
  }

  updateEmployees(){}
  deleteEmployees(){}
}

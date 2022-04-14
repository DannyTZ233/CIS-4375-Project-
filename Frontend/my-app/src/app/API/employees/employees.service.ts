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
    return this.http.get<Employees>(this.baseUrl+'/employees')
  }

  postEmployees(){}
  updateEmployees(){}
  deleteEmployees(){}
}

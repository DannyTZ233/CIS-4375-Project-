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

  postEmployees(fName:any, lName:any, phone:any, email:any, joinDate:any, quitDate:any, comment:any, empQuitId:any, jobTitleId: any, storeId: any ){
    return this.http.post<any>(this.baseUrl+'/employee',
    {fName, lName, phone, email, joinDate, quitDate, comment, empQuitId, jobTitleId, storeId })
    .pipe(map(Employees => {
      return Employees;
    }))
  }

  updateEmployees(){}
  deleteEmployees(){}
}

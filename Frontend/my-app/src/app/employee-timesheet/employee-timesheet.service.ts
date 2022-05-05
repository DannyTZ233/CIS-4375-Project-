import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTimesheetService {

  baseURL:string = API_URL;

  constructor(private http: HttpClient) { }

  getEmpScheds(){
    return this.http.get<any>(this.baseURL+`/employee-schedule?date=$`)
  }

  postClockIn(data: any, id: any){
    return this.http.post<any>(this.baseURL+`employee-schedule?id=${id}`, data)
  }

  putClockOut(data:any, id: any){
    return this.http.put<any>(this.baseURL+`employee-schedule?id=${id}`, data)
    
  }

}
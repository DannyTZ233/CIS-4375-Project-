import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL:string = API_URL;

  constructor(private http: HttpClient) { }

  postLogin(data: any){
    return this.http.post<any>(this.baseURL+'login?admin=True', data);
  }

  putLogin(data:any, id: number){
    return this.http.put<any>(this.baseURL+`login?id=${id}`, data)
  }

  newLogin(data: any){
    return this.http.post<any>(this.baseURL+'login', data);
  }
}

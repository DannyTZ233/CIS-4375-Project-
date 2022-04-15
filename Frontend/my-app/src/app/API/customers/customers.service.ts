import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../env';
import { map } from 'rxjs';
import { Customers } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustomers(){
    return this.http.get<Customers>(this.baseUrl+'/customers')
  }

  postCustomers(fName:any, lName:any, phone:any, email:any, zip:any){
    return this.http.post<any>(this.baseUrl+'/customer',
    {fName, lName, phone, email, zip})
    .pipe(map(Customers => {
      return Customers;
    }))
  }

  updateCustomers(){}
  deleteCustomers(){}
}

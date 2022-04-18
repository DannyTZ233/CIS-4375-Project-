import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {API_URL} from '../../env';
import { map, Observable } from 'rxjs';
import { Customers } from './customer.model';
import { OneCustomer } from './oneCustomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl:string = API_URL;

  constructor(private http: HttpClient) {
  }

  getCustomers(){
    return this.http.get<Customers[]>(this.baseUrl+'/customers')
  }

  getCustomerbyPhone(phone: string): Observable<Customers>{
    return this.http.get(this.baseUrl +'/phonecustomer/' + `${phone}`)
  }

  getCustomerbyId(id: any): Observable<Customers>{
    return this.http.get(this.baseUrl +'')
  }

  postCustomers(first_name:any, last_name:any, phone:any, email:any, zip:any){
    return this.http.post<any>(this.baseUrl+'/customer',
    {first_name, last_name, phone, email, zip})
    .pipe(map(Customers => {
      return Customers;
    }))
  }

  updateCustomer(){}
  deleteCustomer(customer_id: any){
    return this.http.delete(this.baseUrl+'/delete'+customer_id);
  }
}

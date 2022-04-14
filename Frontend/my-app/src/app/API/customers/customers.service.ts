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

  postCustomers(){}
  updateCustomers(){}
  deleteCustomers(){}
}

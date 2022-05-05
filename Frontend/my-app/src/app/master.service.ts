import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  isLoggedIn(){
    return localStorage.getItem("user")==='admin'
  }
}

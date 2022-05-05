import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeIdService {

  private loggedInEmp = new BehaviorSubject(0);
  currentLoggedInEmp = this.loggedInEmp.asObservable();

  constructor() { 
  }

  updateLoggedInEmp(id: any) {
    this.loggedInEmp.next(id)
    }
}

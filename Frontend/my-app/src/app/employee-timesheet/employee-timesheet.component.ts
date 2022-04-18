import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from '../API/employees/employees.model';
import { EmployeesService } from '../API/employees/employees.service';
import { EmpSchedules } from '../API/empSchedules/empSchedules.model';
import { EmpSchedulesService } from '../API/empSchedules/emp-schedules.service';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {

  employees: any;
  clockedIn: any;
  clockedOut: any;

  constructor(private route: Router,
    private employeesService: EmployeesService,
    private empSchedServ: EmpSchedulesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees()
    .subscribe((data:any)=>{
      this.employees=data.employees;
    })

  }

  // clockOut(emp_id: any, clockedIn:boolean): void {

  //   this.empSchedServ.postEmpSchedule(emp_id)
  //   .subscribe(data => {
      
  //     setTimeout(() => {
  //       this.customersService.getCustomers()
  //       .subscribe((data: any) => {
  //         this.customers = data.Customers;
  //       });
  //     }, 1000);
  //   });

  // }

  clockOut(clockedIn:boolean){
    this.clockedIn = !clockedIn;
  }

  clockIn(clockedOut:boolean){
    this.clockedOut = !clockedOut;
  }

}

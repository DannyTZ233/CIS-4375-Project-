import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: any;

  constructor(private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe((data:any)=>{
      this.employees=data.employees;
    })
  }

  openAdd(){  }
  edit(){}
  quit(){}

}

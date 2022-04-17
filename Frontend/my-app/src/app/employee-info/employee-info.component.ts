import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../API/employees/employees.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employees: any
  constructor(private route: Router,
    private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees()
    .subscribe((data:any)=>{
      this.employees=data.employees;
    })
  }

}

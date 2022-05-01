import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeTimesheetService } from './employee-timesheet.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {


  empID: any;
  data:any;

  constructor(private router: Router,
    private employeeTimesheetService: EmployeeTimesheetService) { }

  ngOnInit(): void {
  }



  clockIn() {
    
    console.log(this.data, this.empID);
    this.employeeTimesheetService.postClockIn(this.data, this.empID)

  }
  clockOut() {
    
    console.log(this.data, this.empID);
    this.employeeTimesheetService.putClockOut(this.data, this.empID)

  }
}

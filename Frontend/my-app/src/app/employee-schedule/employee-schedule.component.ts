
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpScheduleService } from './employee-schedule.service';

@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.css']
})
export class EmployeeScheduleComponent implements OnInit {

  empscheds: any;
  date: any;

  constructor(private route: Router,
    private empSchedules: EmpScheduleService) { }

  ngOnInit(): void { }

  getScheds() {

    //console.log(this.date)
    //console.log(typeof date)

    this.empSchedules.getEmpScheds(this.date)
      .subscribe((data) => {
        this.empscheds = data.employee_schedules
        console.log(this.empscheds)
      })
  };

}
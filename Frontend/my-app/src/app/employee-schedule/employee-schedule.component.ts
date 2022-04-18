import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpSchedulesService } from '../API/empSchedules/emp-schedules.service';

@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.css']
})
export class EmployeeScheduleComponent implements OnInit {

  empscheds: any;

  getScheds(scheddate: any) {

    //console.log(scheddate)
    //console.log(typeof scheddate)

    //date formatting and type adjustment
    scheddate = Date.parse(scheddate)

    //API call, just needs to pass date as argument
    this.empSchedules.getEmpSchedules(/*scheddate*/)
      .subscribe((data: any) => {
        this.empscheds = data.employees
      })
  };

  constructor(private route: Router,
    private empSchedules: EmpSchedulesService) { }

  ngOnInit(): void {

    /*this.empSchedules.getEmpSchedules()
      .subscribe((data: any) => {
        this.empscheds = data.employees
      })*/


  }

}

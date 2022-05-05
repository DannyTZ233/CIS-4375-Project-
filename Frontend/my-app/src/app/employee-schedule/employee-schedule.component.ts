
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmpScheduleService } from './employee-schedule.service';

@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.css']
})
export class EmployeeScheduleComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'name', 'check_in_time', 'check_out_time', 'log_datetime', 
  'total_time'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  empscheds: any;
  date: any;

  constructor(private route: Router,
    private empSchedules: EmpScheduleService) { }

  ngOnInit(): void { }

  getScheds() {

    //console.log(this.date)
    //console.log(typeof date)

    this.empSchedules.getEmpScheds(this.date)
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res.employee_schedules);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:(err)=>{
          alert("Error while retrieving records")
        }
      })
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
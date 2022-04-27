import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { QuitEmployeeComponent } from '../quit-employee/quit-employee.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'e_phone', 'e_email', 'join_date', 
  'quit_date', 'job_title', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router,
    private employeeService: EmployeeService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openDialog() {
    this.dialog.open(AddEmployeeComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllEmployees();
      }
    })
  }

  getAllEmployees(){
    this.employeeService.getEmployees()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while retrieving records")
      }
    })
  }

  editEmployee(row:any){
    this.dialog.open(AddEmployeeComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllEmployees();
      }
    })
  }

  quitEmployee(row:any){
    this.dialog.open(QuitEmployeeComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='quit'){
        this.getAllEmployees();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
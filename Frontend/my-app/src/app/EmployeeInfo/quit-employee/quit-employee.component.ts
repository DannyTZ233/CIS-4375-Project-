import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-quit-employee',
  templateUrl: './quit-employee.component.html',
  styleUrls: ['./quit-employee.component.css']
})
export class QuitEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<QuitEmployeeComponent>) { }

  ngOnInit(): void {
  }

  quitEmployee(){
    this.employeeService.quitEmployee(this.editData,this.editData.emp_id)
    .subscribe({
      next:(res)=>{
        alert("Employee marked as left successfully")
        this.dialogRef.close('quit');
      },
      error:(err)=>{
        alert("Error while updating record")
      }
    })
  }

}

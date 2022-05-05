import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';
import { LoginService } from '../login-page/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentEmpId!: number;
  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private service: LoginService,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private route: Router,
    private employeeIdService: EmployeeIdService) {
      this.form = this.formBuilder.group({
        password : ['', Validators.required]
      });
     }

  ngOnInit(): void {
    this.employeeIdService.currentLoggedInEmp.subscribe(emp_id=> this.currentEmpId = emp_id)
  }

  change(){
    console.log(this.currentEmpId)
    this.service.putLogin(this.form.value,this.currentEmpId)
    .subscribe({
      next:(res)=>{
        alert(`Password updated successfully for Employee ID: ${this.currentEmpId}; you must now login with your new password`)
        this.form.reset();
        this.dialogRef.close();
        this.route.navigate(['login'])
        localStorage.clear()
      },
      error:(err)=>{
        alert("Error while updating password")
      }
    })
  }

}

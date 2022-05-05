import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login-page/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private service: LoginService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private route: Router) {
      this.form = this.formBuilder.group({
        password : ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

  change(){
    this.service.putLogin(this.form.value,2)
    .subscribe({
      next:(res)=>{
        alert("Password updated successfully; you must now login with your new password")
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login-page/login.service';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private service: LoginService,
    private dialogRef: MatDialogRef<AddLoginComponent>,
    private route: Router) { 
      this.form = this.formBuilder.group({
        emp_id : ['', Validators.required],
        password : ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  add(){
    this.service.newLogin(this.form.value)
    .subscribe({
      next:(res)=>{
        alert("New Admin Login added")
        this.form.reset();
        this.dialogRef.close();
      },
      error:(err)=>{
        this.form.reset();
        alert("Error while adding Login");
      }
    })
  }

}

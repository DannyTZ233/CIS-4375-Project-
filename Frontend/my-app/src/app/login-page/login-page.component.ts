import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  currentEmpId!: number;
  error!: false;
  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private employeeIdService: EmployeeIdService) { 
      this.form = this.formBuilder.group({
        emp_id : ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.employeeIdService.currentLoggedInEmp.subscribe(emp_id => this.currentEmpId = emp_id);
  }

  submit(){
    if(this.form.valid){
      this.loginService.postLogin(
        this.form.value)
        .subscribe({
          next:(res)=>{
            console.log(this.form.value.emp_id)
            this.employeeIdService.updateLoggedInEmp(this.form.value.emp_id)
            alert("Successfully Logged In")
            this.form.reset();
            this.router.navigate([""])
            localStorage.setItem("user", 'admin')
          },
          error:()=>{
            alert("Login Failed")
            this.form.reset();
          }
        });
    }
  }

}

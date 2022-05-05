import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  currenttime = Date();
  error!: false;
  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { 
      this.form = this.formBuilder.group({
        emp_id : ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      this.loginService.postLogin(
        this.form.value)
        .subscribe({
          next:(res)=>{
            alert("Successfully Logged In")
            this.form.reset();
            this.router.navigate([""])
            localStorage.setItem("user", 'admin')
          },
          error:()=>{
            alert("Login Failed")
          }
        });
    }
  }

}

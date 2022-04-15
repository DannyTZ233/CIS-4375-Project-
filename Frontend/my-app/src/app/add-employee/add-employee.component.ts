import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EmployeesService } from '../API/employees/employees.service';
import { JobTitlesService } from '../API/jobTitles/job-titles.service';
import { StoresService } from '../API/stores/stores.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  angForm : FormGroup;
  JobsList: any;
  StoresList: any;
  selectedJob: any;
  selectedStore: any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private employeesService: EmployeesService,
    private jobTitlesService: JobTitlesService,
    private storesService: StoresService
  ) { 

    this.angForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      zip: ['', Validators.required],
      comment: [''],
      jobTitle: ['', Validators.required],
      store: ['', Validators.required],
    })

   }

  ngOnInit(): void {
    this.jobTitlesService.getJobTitles().subscribe((data:any)=>{
      this.JobsList=data;
    })
    this.storesService.getStores().subscribe((data:any)=>{
      this.StoresList=data;
    })
  }

  addEmployee(forms: any){
    this.employeesService.postEmployees(
      this.angForm.value.fName, 
      this.angForm.value.lName, 
      this.angForm.value.phone, 
      this.angForm.value.email, 
      this.angForm.value.joinDate, 
      null, 
      this.angForm.value.comment, 
      null, 
      this.angForm.value.jobTitle, 
      this.angForm.value.store)
      .pipe(first())
      .subscribe( data => {
        this.route.navigate(['/employees'])
      });
  }

  changeJob(e:any){
    this.selectedJob=e.target.value;
  }

  changeStore(e:any){
    this.selectedStore=e.target.value;
  }

}

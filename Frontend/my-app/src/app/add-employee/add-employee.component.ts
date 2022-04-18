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
      e_first_name: ['', Validators.required],
      e_last_name: ['', Validators.required],
      e_phone: ['', Validators.required],
      e_email: ['', Validators.required],
      join_date: ['', Validators.required],
      e_comment: '',
      //jobTitle: ['', Validators.required],
      store: ['', Validators.required],
    })

   }

  ngOnInit(): void {
    // this.jobTitlesService.getJobTitles().subscribe((data:any)=>{
    //   this.JobsList=data['job titles'];
    // })
    this.storesService.getStores().subscribe((data:any)=>{
      this.StoresList=data.stores;
    })
  }

  addEmployee(forms: any){
    this.employeesService.postEmployees(
      this.angForm.value.e_first_name, 
      this.angForm.value.e_last_name, 
      this.angForm.value.e_phone, 
      this.angForm.value.e_email, 
      this.angForm.value.join_date, 
      this.angForm.value.join_date,
      this.angForm.value.e_comment, 
      1, 
      3, 
      this.angForm.value.store)
      .pipe(first())
      .subscribe( data => {
        this.route.navigate(['/employee-info'])
      });
  }

  changeJob(e:any){
    this.selectedJob=e.target.value;
  }

  changeStore(e:any){
    this.selectedStore=e.target.value;
  }

}

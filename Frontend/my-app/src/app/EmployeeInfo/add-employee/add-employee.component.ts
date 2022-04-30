import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  actionBtn:String = "Save";

  constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddEmployeeComponent>) { 
    this.employeeForm = this.formBuilder.group({
      e_first_name : ['', Validators.required],
      e_last_name : ['', Validators.required],
      e_phone : ['', Validators.required],
      e_email : ['', Validators.required],
      job_title : ['', Validators.required],
      store_id : 1
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.employeeForm.controls['e_first_name'].setValue(this.editData.e_first_name);
      this.employeeForm.controls['e_last_name'].setValue(this.editData.e_last_name);
      this.employeeForm.controls['e_phone'].setValue(this.editData.e_phone);
      this.employeeForm.controls['e_email'].setValue(this.editData.e_email);
      this.employeeForm.controls['job_title'].setValue(this.editData.job_title);
    }
  }

  ngOnInit(): void {
  }

  addEmployee(){
      if(!this.editData){
        if(this.employeeForm.valid){
          this.employeeService.postEmployee(
            this.employeeForm.value)
            .subscribe({
              next:(res)=>{
                alert("Employee added successfully")
                this.employeeForm.reset();
                this.dialogRef.close('save');
              },
              error:()=>{
                alert("Employee phone number already exists in records")
              }
            });
        }
      } else{
        this.updateEmployee()
      }
    
  }

  updateEmployee(){
    this.employeeService.putEmployee(this.employeeForm.value,this.editData.emp_id)
    .subscribe({
      next:(res)=>{
        alert("Employee updated successfully")
        this.employeeForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Error while updating record")
      }
    })
  }

}

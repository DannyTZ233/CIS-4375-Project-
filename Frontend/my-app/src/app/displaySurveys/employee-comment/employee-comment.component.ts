import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CustShortRevPost } from 'src/app/API/custShortReviews/custShortRevPost.model';
import { EmpRepliesService } from 'src/app/API/empReplys/emp-replies.service';

@Component({
  selector: 'app-employee-comment',
  templateUrl: './employee-comment.component.html',
  styleUrls: ['./employee-comment.component.css']
})
export class EmployeeCommentComponent implements OnInit {
  @Input()surveys: CustShortRevPost = {};

  angForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private commentService: EmpRepliesService
  ) { this.angForm = this.fb.group({
    emp_id: ['', Validators.required],
    customer_id: ['', Validators.required],
    responses: ['', Validators.required]})
  }

  ngOnInit(): void {
  }
  
  addComment(forms: any){
    this.commentService.postEmpReplies(
      this.angForm.value.emp_id, 
      this.surveys.customer_id,
      this.angForm.value.responses)
      .pipe(first())
      .subscribe( data => {
        this.route.navigate(['/survey-info'])
      });
  }

  goBack(){
    this.route.navigate(['/survey-info'])
  }

  ngOnDestroy(){}

}

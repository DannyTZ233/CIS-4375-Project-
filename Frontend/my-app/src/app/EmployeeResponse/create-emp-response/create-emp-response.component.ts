import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpRepliesService } from 'src/app/API/empReplys/emp-replies.service';
import { EmpRepliesAPI } from 'src/app/API/empReplys/empRepliesAPI.model';
import { EmpRepliesForPost } from 'src/app/API/empReplys/empRepliesForPost.model';

@Component({
  selector: 'app-create-emp-response',
  templateUrl: './create-emp-response.component.html',
  styleUrls: ['./create-emp-response.component.css']
})
export class CreateEmpResponseComponent implements OnInit {
  model = new EmpRepliesForPost;

  constructor(private empRepliesService: EmpRepliesService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
  }

  submitEmpResponse(form: NgForm): void {

    // this.model.emp_id = 2;
    // this.model.customer_id = 1;
    
    //   this.empRepliesService.postEmpReplies(this.model).subscribe();
    //   this.router.navigate(['/list-simple-surveys']);
  }

}

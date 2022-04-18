import { Component, OnInit } from '@angular/core';
import { CustShortReviewsService } from '../API/custShortReviews/cust-short-reviews.service';
import { CustomersService } from '../API/customers/customers.service';
import { RatingsService } from '../API/ratings/ratings.service';
import { EmpRepliesService } from '../API/empReplys/emp-replies.service';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, first, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-list-short-surveys',
  templateUrl: './list-short-surveys.component.html',
  styleUrls: ['./list-short-surveys.component.css']
})
export class ListShortSurveysComponent implements OnInit {
  //isShowing = false;

  // surveys: any;
  // replies: any;
  //angForm : FormGroup;

  // constructor(private route: Router,
  //   private activatedRoute: ActivatedRoute,
  //   private fb: FormBuilder,
  //   private custShortRevServ: CustShortReviewsService,
  //   private custServ: CustomersService,
  //   private ratingServ: RatingsService,
  //   private empRepServ: EmpRepliesService) {

    //   this.angForm = this.fb.group({
    //     responses: ['', Validators.required]
    //   })

    //  }

  ngOnInit(): void {

    // combineLatest({
    //   surveys: this.custShortRevServ.getCustShortReviews(),
    //   replies: this.empRepServ.getEmpReplies()
    // })
    // .pipe(
    //   map(response => {
    //     const surveys = <Array<any>>response.surveys;
    //     const replies = <Array<any>>response.replies;
    //     const result: any[] = [];
    //     surveys.map((survey: any) => {
    //       result.push({
    //         ...survey, 
    //         ...replies.find((reply: any) => 
    //         (reply.c_first === survey.first_name) && (reply.c_last === survey.last_name))})
    //     });
    //     console.log("result ", result)
    //     return result;
    //   })
    //   )
    //   .subscribe((data) => {
    //     console.log(data)
    //     this.surveys = data;
    //   });

    // this.custShortRevServ.getCustShortReviews()
    // .subscribe((data:any)=>{
    //   this.surveys=data.surveys;
    // })

    // this.empRepServ.getEmpReplies()
    // .subscribe((data:any)=>{
    //   this.replies=data.replies;
    // })
  }

  onScroll() {
    console.log("scrolled!!");
  }

  showReplyBox(){
    //this.isShowing=!this.isShowing;
  }

  // addReply(forms: any){

  //   this.empRepServ.postEmpReplies(
  //     2,
  //     this.angForm.value.customer_id,
  //     this.angForm.value.responses
  //   ).pipe(first())
  //   .subscribe( date => {
  //     this.route.navigate([this.route.url])
  //   })

  // }
}

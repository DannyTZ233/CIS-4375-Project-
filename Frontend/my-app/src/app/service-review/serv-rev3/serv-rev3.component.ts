// import { Component, Input, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { first } from 'rxjs';
// import  {ServiceReviewsService} from '../../API/serviceReviews/service-reviews.service'
// import { CustomersService } from '../../API/customers/customers.service';
// import{RatingsService} from '../../API/ratings/ratings.service';


// @Component({
//   selector: 'app-serv-rev3',
//   templateUrl: './serv-rev3.component.html',
//   styleUrls: ['./serv-rev3.component.css']
// })
// export class ServRev3Component implements OnInit {

//   @Input() emp_id = '';
//   angForm : FormGroup;
//   customer_id: any;
//   first_name: any;
//   last_name: any;
//   myCustomer: any;
//   rating: any;
//   RatingsList: any;
//   n: any;

//   constructor(private fb: FormBuilder,
//     private route: Router,
//     private servicesService: ServiceReviewsService,
//     private customersService: CustomersService,
//     private ratingsService: RatingsService,) { 
//       this.angForm = this.fb.group({

//         service_review_question_id: 3,
//         rating_id: ['', Validators.required],
//         emp_id: this.emp_id,
//         customer_id: 1,
//     })}

//   ngOnInit(): void {
//     this.ratingsService.getRatings().subscribe((data: any) =>{
//       this.RatingsList = data.ratings
//   })


// }

// submitService(forms: any){
//   this.servicesService.postServiceRevs(
//     3, 
//     this.angForm.value.rating_id, 
//     this.emp_id, 
//     this.customer_id,
//   ).pipe(first())
//   .subscribe( data => {
//     console.log('success')
//   });
// }

// }



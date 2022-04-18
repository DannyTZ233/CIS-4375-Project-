// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { first } from 'rxjs';
// import  {ServiceReviewsService} from '../../API/serviceReviews/service-reviews.service'
// import { CustomersService } from '../../API/customers/customers.service';
// import{RatingsService} from '../../API/ratings/ratings.service';


// @Component({
//   selector: 'app-serv-rev1',
//   templateUrl: './serv-rev1.component.html',
//   styleUrls: ['./serv-rev1.component.css']
// })
// export class ServRev1Component implements OnInit {

//   angForm : FormGroup;
//   emp_id: any;
//   @Output() newItemEvent = new EventEmitter<string>();

//   addNewItem(value: string) {
//     this.newItemEvent.emit(value);
//   }

//   constructor(private fb: FormBuilder,
//     private route: Router,
//     private servicesService: ServiceReviewsService,
//     private customersService: CustomersService,
//     private ratingsService: RatingsService,) { 
//       this.angForm = this.fb.group({
//         emp_id: ['', Validators.required],
//     })}

//   ngOnInit(): void {
//   }

//   addItem(getEmp: string) {
//     this.emp_id.push(getEmp);
//   }


// }



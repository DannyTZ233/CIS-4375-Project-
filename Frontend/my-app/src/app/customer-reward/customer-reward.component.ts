import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustPointsService } from '../API/custPoints/cust-points.service';

@Component({
  selector: 'app-customer-reward',
  templateUrl: './customer-reward.component.html',
  styleUrls: ['./customer-reward.component.css']
})
export class CustomerRewardComponent implements OnInit {

  customer_id:any;
  constructor(private pointsService: CustPointsService,
    private router: Router) { }

  ngOnInit(): void {
    this.customer_id = history.state;
  }

  finish(){
    this.pointsService.postCustPoints(this.customer_id,2)
    this.router.navigateByUrl('/check-customer');
  }

  ngOnDestroy(){}

}

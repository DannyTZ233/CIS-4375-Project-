import { Component, Input, OnInit } from '@angular/core';
import { EmpRepliesAPI } from 'src/app/API/empReplys/empRepliesAPI.model';

@Component({
  selector: 'app-emp-response',
  templateUrl: './emp-response.component.html',
  styleUrls: ['./emp-response.component.css']
})
export class EmpResponseComponent implements OnInit {
  @Input()reply: EmpRepliesAPI = {};

  constructor() { }

  ngOnInit(): void {
  }

}

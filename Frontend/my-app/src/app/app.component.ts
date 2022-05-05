import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: MasterService,
    private route: Router,
    private dialog: MatDialog){}
  title = 'my-app';

  canSee(){
    return this.service.isLoggedIn()
  }

  logout(){
    this.route.navigate(['login'])
    localStorage.clear()
  }

  change(){
    this.dialog.open(ChangePasswordComponent, {
      width:'30%'
    })
  }
}

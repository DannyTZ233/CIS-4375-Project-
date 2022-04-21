import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EmployeeDetailsComponent } from './EmployeeInfo/employee-details/employee-details.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'review', component: ShortSurveyComponent },
{ path: 'timesheet', component: EmployeeTimesheetComponent },
{ path: 'customer-info', component: CustomerInfoComponent },
{ path: 'schedule', component: EmployeeScheduleComponent },
{ path: 'analytics', component: AnalyticsComponent },
{ path: 'add-customer', component: AddCustomerComponent },
{ path: 'employee-details', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

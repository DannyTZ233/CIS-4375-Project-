import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LongSurveyComponent } from './long-survey/long-survey.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'survey', component: LongSurveyComponent },
{ path: 'review', component: ShortSurveyComponent },
{ path: 'timesheet', component: EmployeeTimesheetComponent },
{ path: 'customer-info', component: CustomerInfoComponent },
{ path: 'employee-info', component: EmployeeInfoComponent },
{ path: 'schedule', component: EmployeeScheduleComponent },
{ path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

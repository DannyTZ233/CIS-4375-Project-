import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EmployeeDetailsComponent } from './EmployeeInfo/employee-details/employee-details.component';
import { SurveyComponent } from './Survey/survey/survey.component';
import { ViewSurveyComponent } from './Survey/view-survey/view-survey.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'survey', component: SurveyComponent },
{ path: 'responses', component: ViewSurveyComponent },
{ path: 'timesheet', component: EmployeeTimesheetComponent },
{ path: 'schedule', component: EmployeeScheduleComponent },
{ path: 'analytics', component: AnalyticsComponent },
{ path: 'employees', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

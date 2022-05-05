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
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
{ path: '', component: HomePageComponent, canActivate:[AuthGuard] },
{ path: 'login', component: LoginPageComponent },
{ path: 'survey', component: SurveyComponent },
{ path: 'responses', component: ViewSurveyComponent, canActivate:[AuthGuard] },
{ path: 'clockinout', component: EmployeeTimesheetComponent, canActivate:[AuthGuard] },
{ path: 'timesheet', component: EmployeeScheduleComponent, canActivate:[AuthGuard] },
{ path: 'analytics', component: AnalyticsComponent, canActivate:[AuthGuard] },
{ path: 'employees', component: EmployeeDetailsComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

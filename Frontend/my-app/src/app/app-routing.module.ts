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
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListShortSurveysComponent } from './list-short-surveys/list-short-surveys.component';
import { ServiceReviewComponent } from './service-review/service-review.component';
import { CheckCustomerComponent } from './CustomerLogin/check-customer/check-customer.component';
import { GiveCustomerTokenComponent } from './CustomerLogin/give-customer-token/give-customer-token.component';
import { CustomerRewardComponent } from './customer-reward/customer-reward.component';
import { SurveyInfoComponent } from './displaySurveys/survey-info/survey-info.component';
import { DishQ1Component } from './BigSurvey/dish-q1/dish-q1.component';
import { ServiceQ1Component } from './BigSurvey/service-q1/service-q1.component';
import { ServiceQ2Component } from './BigSurvey/service-q2/service-q2.component';
import { ServiceQ3Component } from './BigSurvey/service-q3/service-q3.component';
import { ServiceQ4Component } from './BigSurvey/service-q4/service-q4.component';
import { EnvironmentQ1Component } from './BigSurvey/environment-q1/environment-q1.component';
import { EnvironmentQ2Component } from './BigSurvey/environment-q2/environment-q2.component';
import { EmployeeCommentComponent } from './displaySurveys/employee-comment/employee-comment.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'survey', component: LongSurveyComponent },
{ path: 'long-survey', component: ShortSurveyComponent },
{ path: 'timesheet', component: EmployeeTimesheetComponent },
{ path: 'customer-info', component: CustomerInfoComponent },
{ path: 'employee-info', component: EmployeeInfoComponent },
{ path: 'schedule', component: EmployeeScheduleComponent },
{ path: 'add-customer', component: AddCustomerComponent },
{ path: 'add-employee', component: AddEmployeeComponent },
{ path: 'list-short-surveys', component: ListShortSurveysComponent },
{ path: 'service-review', component: ServiceReviewComponent },
{ path: 'check-customer', component: CheckCustomerComponent },
{ path: 'give-customer-token', component: GiveCustomerTokenComponent },
{ path: 'customer-reward', component: CustomerRewardComponent },
{ path: 'display-survey', component: SurveyInfoComponent, 
children: [{path: 'employee-comment', component: EmployeeCommentComponent}] },
{ path: 'dish-q1', component: DishQ1Component },
{ path: 'service-q1', component: ServiceQ1Component },
{ path: 'service-q2', component: ServiceQ2Component },
{ path: 'service-q3', component: ServiceQ3Component },
{ path: 'service-q4', component: ServiceQ4Component },
{ path: 'environment-q1', component: EnvironmentQ1Component },
{ path: 'environment-q2', component: EnvironmentQ2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

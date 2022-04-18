import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongSurveyComponent } from './long-survey/long-survey.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListShortSurveysComponent } from './list-short-surveys/list-short-surveys.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ServiceReviewComponent } from './service-review/service-review.component';
import { EmpResponseComponent } from './EmployeeResponse/emp-response/emp-response.component';
import { CreateEmpResponseComponent } from './EmployeeResponse/create-emp-response/create-emp-response.component';
import { CheckCustomerComponent } from './CustomerLogin/check-customer/check-customer.component';
import { GiveCustomerTokenComponent } from './CustomerLogin/give-customer-token/give-customer-token.component';
import { CustomerRewardComponent } from './customer-reward/customer-reward.component';
import { ExtensiveCheckCustomerComponent } from './ExtensiveSurvey/extensive-check-customer/extensive-check-customer.component';
import { ExtensiveAddCustomerComponent } from './ExtensiveSurvey/extensive-add-customer/extensive-add-customer.component';
import { ExtensiveGiveCustomerTokenComponent } from './ExtensiveSurvey/extensive-give-customer-token/extensive-give-customer-token.component';
import { ExtenGiveCustomerTokenComponent } from './ExtensiveSurvey/exten-give-customer-token/exten-give-customer-token.component';
import { SurveyInfoComponent } from './displaySurveys/survey-info/survey-info.component';
import { EmployeeCommentComponent } from './displaySurveys/employee-comment/employee-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LongSurveyComponent,
    ShortSurveyComponent,
    HomePageComponent,
    LoginPageComponent,
    CustomerInfoComponent,
    EmployeeScheduleComponent,
    EmployeeInfoComponent,
    EmployeeTimesheetComponent,
    AnalyticsComponent,
    AddCustomerComponent,
    AddEmployeeComponent,
    ListShortSurveysComponent,
    ServiceReviewComponent,
    EmpResponseComponent,
    CreateEmpResponseComponent,
    CheckCustomerComponent,
    GiveCustomerTokenComponent,
    CustomerRewardComponent,
    ExtensiveCheckCustomerComponent,
    ExtensiveAddCustomerComponent,
    ExtensiveGiveCustomerTokenComponent,
    ExtenGiveCustomerTokenComponent,
    SurveyInfoComponent,
    EmployeeCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

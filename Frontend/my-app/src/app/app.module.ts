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
import { EnvironmentQ1Component } from './BigSurvey/environment-q1/environment-q1.component';
import { EnvironmentQ2Component } from './BigSurvey/environment-q2/environment-q2.component';
import { DishQ1Component } from './BigSurvey/dish-q1/dish-q1.component';
import { ServiceQ1Component } from './BigSurvey/service-q1/service-q1.component';
import { ServiceQ4Component } from './BigSurvey/service-q4/service-q4.component';
import { ServiceQ2Component } from './BigSurvey/service-q2/service-q2.component';
import { ServiceQ3Component } from './BigSurvey/service-q3/service-q3.component';
import { EmployeeCommentComponent } from './displaySurveys/employee-comment/employee-comment.component';
import { EmployeeDetailsComponent } from './NewStart/Employee/employee-details/employee-details.component';
import { EditEmployeeComponent } from './NewStart/Employee/edit-employee/edit-employee.component';
import { QuitEmployeeComponent } from './NewStart/Employee/quit-employee/quit-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    EnvironmentQ1Component,
    EnvironmentQ2Component,
    DishQ1Component,
    ServiceQ1Component,
    ServiceQ2Component,
    ServiceQ3Component,
    ServiceQ4Component,
    EmployeeCommentComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    QuitEmployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

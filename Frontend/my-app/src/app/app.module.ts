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
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortSurveyComponent } from './short-survey/short-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { EmployeeDetailsComponent } from './EmployeeInfo/employee-details/employee-details.component';
import { QuitEmployeeComponent } from './EmployeeInfo/quit-employee/quit-employee.component';
import { AddEmployeeComponent } from './EmployeeInfo/add-employee/add-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SurveyComponent } from './Survey/survey/survey.component';
import { ViewSurveyComponent } from './Survey/view-survey/view-survey.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    ShortSurveyComponent,
    HomePageComponent,
    LoginPageComponent,
    CustomerInfoComponent,
    EmployeeScheduleComponent,
    EmployeeTimesheetComponent,
    AnalyticsComponent,
    AddCustomerComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    QuitEmployeeComponent,
    SurveyComponent,
    ViewSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

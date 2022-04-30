import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm!: FormGroup;

  constructor(private surveyService: SurveyService,
    private formBuilder: FormBuilder) {
      this.surveyForm = this.formBuilder.group({
        zip_code : ['', Validators.required],
        service : ['', Validators.required],
        environment : ['', Validators.required],
        food : ['', Validators.required],
        over_all_rating : ['', Validators.required],
        comment : ''
      });
     }

  ngOnInit(): void {
  }

  submitSurvey(){
    if(this.surveyForm.valid){
      console.log(this.surveyForm.value)
      this.surveyService.postSurvey(
        this.surveyForm.value)
        .subscribe({
          next:(res)=>{
            alert("Survey submitted")
            this.surveyForm.reset();
          },
          error:()=>{
            alert("Invalid survey response")
          }
        });
    }
  }

  clearSurvey(){
    this.surveyForm.reset();
  }

}

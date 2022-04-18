import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyInfoComponent } from './survey-info.component';

describe('SurveyInfoComponent', () => {
  let component: SurveyInfoComponent;
  let fixture: ComponentFixture<SurveyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

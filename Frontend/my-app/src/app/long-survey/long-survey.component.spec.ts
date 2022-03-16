import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongSurveyComponent } from './long-survey.component';

describe('LongSurveyComponent', () => {
  let component: LongSurveyComponent;
  let fixture: ComponentFixture<LongSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

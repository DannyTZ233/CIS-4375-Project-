import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSurveyComponent } from './short-survey.component';

describe('ShortSurveyComponent', () => {
  let component: ShortSurveyComponent;
  let fixture: ComponentFixture<ShortSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SurveyDataReport } from './survey-report.service';

describe('SurveyDataReport', () => {
  let service: SurveyDataReport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyDataReport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
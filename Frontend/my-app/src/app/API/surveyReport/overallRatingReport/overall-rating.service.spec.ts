import { TestBed } from '@angular/core/testing';

import { CountOverallRating } from './overall-rating.service';

describe('CountOverallRating', () => {
  let service: CountOverallRating;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountOverallRating);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
import { TestBed } from '@angular/core/testing';

import { CountEnvironmentRating } from './environment-rating.service';

describe('CountEnvironmentRating', () => {
  let service: CountEnvironmentRating;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountEnvironmentRating);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
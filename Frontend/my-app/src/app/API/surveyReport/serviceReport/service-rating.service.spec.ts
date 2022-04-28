import { TestBed } from '@angular/core/testing';

import { CountServiceRating } from './service-rating.service';

describe('CountServiceRating', () => {
  let service: CountServiceRating;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountServiceRating);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
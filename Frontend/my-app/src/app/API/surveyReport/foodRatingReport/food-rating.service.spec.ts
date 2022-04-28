import { TestBed } from '@angular/core/testing';

import { CountFoodRating } from './food-rating.service';

describe('CountFoodRating', () => {
  let service: CountFoodRating;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountFoodRating);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
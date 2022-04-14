import { TestBed } from '@angular/core/testing';

import { DishReviewQsService } from './dish-review-qs.service';

describe('DishReviewQsService', () => {
  let service: DishReviewQsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishReviewQsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

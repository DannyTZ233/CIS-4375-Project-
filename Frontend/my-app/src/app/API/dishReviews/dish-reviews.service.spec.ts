import { TestBed } from '@angular/core/testing';

import { DishReviewsService } from './dish-reviews.service';

describe('DishReviewsService', () => {
  let service: DishReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

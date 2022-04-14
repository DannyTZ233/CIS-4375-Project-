import { TestBed } from '@angular/core/testing';

import { EnvReviewsService } from './env-reviews.service';

describe('EnvReviewsService', () => {
  let service: EnvReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

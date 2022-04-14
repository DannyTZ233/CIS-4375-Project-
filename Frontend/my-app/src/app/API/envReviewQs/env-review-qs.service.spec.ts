import { TestBed } from '@angular/core/testing';

import { EnvReviewQsService } from './env-review-qs.service';

describe('EnvReviewQsService', () => {
  let service: EnvReviewQsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvReviewQsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

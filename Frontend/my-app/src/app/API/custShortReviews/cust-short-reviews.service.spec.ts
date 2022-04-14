import { TestBed } from '@angular/core/testing';

import { CustShortReviewsService } from './cust-short-reviews.service';

describe('CustShortReviewsService', () => {
  let service: CustShortReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustShortReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

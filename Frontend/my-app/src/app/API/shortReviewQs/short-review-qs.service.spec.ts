import { TestBed } from '@angular/core/testing';

import { ShortReviewQsService } from './short-review-qs.service';

describe('ShortReviewQsService', () => {
  let service: ShortReviewQsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortReviewQsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceReviewQsService } from './service-review-qs.service';

describe('ServiceReviewQsService', () => {
  let service: ServiceReviewQsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReviewQsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

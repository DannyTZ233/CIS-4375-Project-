import { TestBed } from '@angular/core/testing';

import { ServiceReviewsService } from './service-reviews.service';

describe('ServiceReviewsService', () => {
  let service: ServiceReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

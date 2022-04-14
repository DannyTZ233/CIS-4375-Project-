import { TestBed } from '@angular/core/testing';

import { CustPointsService } from './cust-points.service';

describe('CustPointsService', () => {
  let service: CustPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

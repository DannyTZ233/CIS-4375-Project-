import { TestBed } from '@angular/core/testing';

import { CustRedeemsService } from './cust-redeems.service';

describe('CustRedeemsService', () => {
  let service: CustRedeemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustRedeemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

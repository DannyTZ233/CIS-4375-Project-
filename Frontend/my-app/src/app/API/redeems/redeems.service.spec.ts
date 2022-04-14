import { TestBed } from '@angular/core/testing';

import { RedeemsService } from './redeems.service';

describe('RedeemsService', () => {
  let service: RedeemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedeemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

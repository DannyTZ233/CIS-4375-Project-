import { TestBed } from '@angular/core/testing';

import { CountZipcodeService } from './zipcode-count.service';

describe('CountZipcodeService', () => {
  let service: CountZipcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountZipcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
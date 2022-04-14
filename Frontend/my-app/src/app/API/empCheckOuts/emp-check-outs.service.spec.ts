import { TestBed } from '@angular/core/testing';

import { EmpCheckOutsService } from './emp-check-outs.service';

describe('EmpCheckOutsService', () => {
  let service: EmpCheckOutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCheckOutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

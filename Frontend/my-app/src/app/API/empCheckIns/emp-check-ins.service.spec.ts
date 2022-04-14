import { TestBed } from '@angular/core/testing';

import { EmpCheckInsService } from './emp-check-ins.service';

describe('EmpCheckInsService', () => {
  let service: EmpCheckInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCheckInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

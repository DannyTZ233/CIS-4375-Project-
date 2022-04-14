import { TestBed } from '@angular/core/testing';

import { EmpQuitsService } from './emp-quits.service';

describe('EmpQuitsService', () => {
  let service: EmpQuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpQuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmpLeavesService } from './emp-leaves.service';

describe('EmpLeavesService', () => {
  let service: EmpLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

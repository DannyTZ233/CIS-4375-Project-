import { TestBed } from '@angular/core/testing';

import { EmpSchedulesService } from './emp-schedules.service';

describe('EmpSchedulesService', () => {
  let service: EmpSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

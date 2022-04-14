import { TestBed } from '@angular/core/testing';

import { RewardsService } from './rewards.service';

describe('RewardsService', () => {
  let service: RewardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

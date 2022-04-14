import { TestBed } from '@angular/core/testing';

import { EmpRepliesService } from './emp-replies.service';

describe('EmpRepliesService', () => {
  let service: EmpRepliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRepliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

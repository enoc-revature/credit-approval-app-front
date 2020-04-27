import { TestBed } from '@angular/core/testing';

import { DataSubmissionService } from './data-submission.service';

describe('DataSubmissionService', () => {
  let service: DataSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

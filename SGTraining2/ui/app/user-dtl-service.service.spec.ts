import { TestBed } from '@angular/core/testing';

import { UserDtlServiceService } from './user-dtl-service.service';

describe('UserDtlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDtlServiceService = TestBed.get(UserDtlServiceService);
    expect(service).toBeTruthy();
  });
});

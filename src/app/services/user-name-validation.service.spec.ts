import { TestBed } from '@angular/core/testing';

import { UserNameValidationService } from './user-name-validation.service';

describe('UserNameValidationService', () => {
  let service: UserNameValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

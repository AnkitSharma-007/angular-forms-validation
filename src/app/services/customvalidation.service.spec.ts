import { TestBed } from '@angular/core/testing';

import { CustomvalidationService } from './customvalidation.service';

describe('CustomvalidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomvalidationService = TestBed.get(CustomvalidationService);
    expect(service).toBeTruthy();
  });
});

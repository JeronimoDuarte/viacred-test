import { TestBed } from '@angular/core/testing';

import { GenericsValidatorsService } from './generics-validators.service';

describe('GenericsValidatorsService', () => {
  let service: GenericsValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericsValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

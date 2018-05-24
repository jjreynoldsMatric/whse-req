import { TestBed, inject } from '@angular/core/testing';

import { ReasonCodesService } from './reason-codes.service';

describe('ReasonCodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReasonCodesService]
    });
  });

  it('should be created', inject([ReasonCodesService], (service: ReasonCodesService) => {
    expect(service).toBeTruthy();
  }));
});

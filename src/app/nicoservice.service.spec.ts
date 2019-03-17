import { TestBed } from '@angular/core/testing';

import { NicoserviceService } from './nicoservice.service';

describe('NicoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NicoserviceService = TestBed.get(NicoserviceService);
    expect(service).toBeTruthy();
  });
});

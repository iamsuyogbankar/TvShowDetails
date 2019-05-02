import { TestBed } from '@angular/core/testing';

import { TvServiceService } from './tv-service.service';

describe('TvServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvServiceService = TestBed.get(TvServiceService);
    expect(service).toBeTruthy();
  });
});

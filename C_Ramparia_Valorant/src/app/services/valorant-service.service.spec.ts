import { TestBed } from '@angular/core/testing';

import { ValorantServiceService } from './valorant-service.service';

describe('ValorantServiceService', () => {
  let service: ValorantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

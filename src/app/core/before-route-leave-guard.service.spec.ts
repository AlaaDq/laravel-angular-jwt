import { TestBed } from '@angular/core/testing';

import { BeforeRouteLeaveGuardService } from './before-route-leave-guard.service';

describe('BeforeRouteLeaveGuardService', () => {
  let service: BeforeRouteLeaveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeforeRouteLeaveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GuardRouteGuard } from './guard-route.guard';

describe('GuardRouteGuard', () => {
  let guard: GuardRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

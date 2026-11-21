import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { billeteGuard } from './billete-guard';

describe('billeteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => billeteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

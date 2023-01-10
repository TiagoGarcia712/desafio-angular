import { TestBed } from '@angular/core/testing';

import { RotasResolver } from './rotas.resolver';

describe('RotasResolver', () => {
  let resolver: RotasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RotasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

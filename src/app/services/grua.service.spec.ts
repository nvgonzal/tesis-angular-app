import { TestBed, inject } from '@angular/core/testing';

import { GruaService } from './grua.service';

describe('GruaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GruaService]
    });
  });

  it('should be created', inject([GruaService], (service: GruaService) => {
    expect(service).toBeTruthy();
  }));
});

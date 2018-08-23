import { TestBed, inject } from '@angular/core/testing';

import { PilotoService } from './piloto.service';

describe('PilotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotoService]
    });
  });

  it('should be created', inject([PilotoService], (service: PilotoService) => {
    expect(service).toBeTruthy();
  }));
});

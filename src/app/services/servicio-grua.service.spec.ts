import { TestBed, inject } from '@angular/core/testing';

import { ServicioGruaService } from './servicio-grua.service';

describe('ServicioGruaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGruaService]
    });
  });

  it('should be created', inject([ServicioGruaService], (service: ServicioGruaService) => {
    expect(service).toBeTruthy();
  }));
});

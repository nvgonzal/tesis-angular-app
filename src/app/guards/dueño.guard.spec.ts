import { TestBed, async, inject } from '@angular/core/testing';

import { DueñoGuard } from './dueño.guard';

describe('DueñoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DueñoGuard]
    });
  });

  it('should ...', inject([DueñoGuard], (guard: DueñoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

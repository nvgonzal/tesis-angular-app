import { VehiculoModule } from './vehiculo.module';

describe('VehiculoModule', () => {
  let vehiculoModule: VehiculoModule;

  beforeEach(() => {
    vehiculoModule = new VehiculoModule();
  });

  it('should create an instance', () => {
    expect(vehiculoModule).toBeTruthy();
  });
});

import { ClienteIntraModule } from './cliente-intra.module';

describe('ClienteIntraModule', () => {
  let clienteIntraModule: ClienteIntraModule;

  beforeEach(() => {
    clienteIntraModule = new ClienteIntraModule();
  });

  it('should create an instance', () => {
    expect(clienteIntraModule).toBeTruthy();
  });
});

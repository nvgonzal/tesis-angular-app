import { SysAdminIntraModule } from './sys-admin-intra.module';

describe('SysAdminIntraModule', () => {
  let sysAdminIntraModule: SysAdminIntraModule;

  beforeEach(() => {
    sysAdminIntraModule = new SysAdminIntraModule();
  });

  it('should create an instance', () => {
    expect(sysAdminIntraModule).toBeTruthy();
  });
});

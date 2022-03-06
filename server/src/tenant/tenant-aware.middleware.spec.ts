import { TenantAwareMiddleware } from './tenant-aware.middleware';

describe('TenantAwareMiddleware', () => {
  it('should be defined', () => {
    expect(new TenantAwareMiddleware()).toBeDefined();
  });
});

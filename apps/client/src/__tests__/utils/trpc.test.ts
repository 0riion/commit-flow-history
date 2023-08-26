import { trpc } from '../../utils/trpc';

describe('TRPC', () => {
  it('should create a TRPC proxy client', () => {
    expect(trpc).toBeDefined();
  });

  it('should have a links property with an httpBatchLink', () => {
    expect(trpc.commits).toBeDefined();
  });

});

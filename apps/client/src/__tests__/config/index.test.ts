import { getEnv } from '../../config/index';

describe('getEnv', () => {
  it('should return an object with environment variables', () => {
    const env = getEnv();
    expect(env).toEqual({
      NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_GITHUB_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
      NEXT_PUBLIC_REPO_OWNER: process.env.NEXT_PUBLIC_REPO_OWNER,
      NEXT_PUBLIC_REPO_NAME: process.env.NEXT_PUBLIC_REPO_NAME,
    });
  });
});
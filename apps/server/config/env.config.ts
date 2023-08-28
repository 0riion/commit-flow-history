export default () => ({
  port: (process.env.PORT && parseInt(process.env.PORT)) || 4000,
  github: {
    baseUrl: process.env.GITHUB_API || 'https://api.github.com',
    repoName: process.env.GITHUB_REPO_NAME || 'commit-flow-history',
    repoOwner: process.env.GITHUB_REPO_OWNER || '0riion',
  },
});

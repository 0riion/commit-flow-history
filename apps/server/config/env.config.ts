export default () => ({
  port: (process.env.PORT && parseInt(process.env.PORT)) || 3000,
  github: {
    baseUrl: 'https://api.github.com',
    token: process.env.GITHUB_TOKEN,
  },
});

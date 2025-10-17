process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/*.(e2e|test).ts'],
  testEnvironment: 'node',
};

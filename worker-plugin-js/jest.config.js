module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.@(e2e|test).js'],
  testEnvironment: 'node',
};

module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/../coverage/javascript',
  collectCoverage: process.env.CI === 'true',
  coverageReporters: process.env.CI === 'true' ? ['text-summary', 'json-summary'] : ['text-summary'],
};

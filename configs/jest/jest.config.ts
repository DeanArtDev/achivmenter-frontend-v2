/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  rootDir: '../../',
  clearMocks: true,

  // coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json'],
  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: [
    'node_modules'
  ],
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  cacheDirectory: '<rootDir>/jest-cache',
  testMatch: ['<rootDir>src/**/__tests__/*.test.(ts|tsx)']
};

module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./setupTests.js'],
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  
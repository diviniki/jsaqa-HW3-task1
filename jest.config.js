/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/coverage/**',
        '!**jest.config.js**',
        '!**/playwright/**',
      ],
    coverageThreshold: {
        "branches": 70,
        "functions": 100,
        "lines": 80
    },
    coverageDirectory: '\coverage'
  };
  
  module.exports = config;
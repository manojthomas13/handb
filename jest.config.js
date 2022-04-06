const path = require('path')

module.exports = {
  // Set our root directory to our src folder, where our code and mocks live
  rootDir: path.join(__dirname, 'src'),
  // Reset mock functions before every individual test, for isolation
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  resetMocks: true,
  // Reset and isolate modules before every individual test, for test safety
  resetModules: true,
  // Show errors when using deprecated parts of the Jest API, to help linting
  errorOnDeprecated: true,
  // Disable coverage collection by default. Use --collectCoverage if coverage is needed.
  collectCoverage: false,
  // Collect coverage from all js & jsx files
  collectCoverageFrom: ['**/*.{js,jsx}'],
  // Don't collect coverage from module, build or test directories
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/__tests__/', '/__fixtures__/', '/__mocks__/'],
  // Scripts to setup our test environment
  setupFilesAfterEnv: [
    // Setup @testing-library helpers
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleNameMapper: {
    // Map SCSS files to an object for CSS module imports.
    '\\.scss$': 'identity-obj-proxy',
  },
  // Run tests in JSDOM to get access to 'document'
  testEnvironment: 'jsdom',
  // Longer test timeout than default, to allow for container setup
  testTimeout: 60000,
}

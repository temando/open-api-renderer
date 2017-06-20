module.exports = {
  collectCoverageFrom: [
    'src/**/*'
  ],
  mapCoverage: true,
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    'balloon-css': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  verbose: true
}

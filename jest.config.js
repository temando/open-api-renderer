module.exports = {
  collectCoverageFrom: [
    'src/**/*'
  ],
  mapCoverage: true,
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    '\\.styles$': '<rootDir>/src/__mocks__/stylesMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  verbose: true
}

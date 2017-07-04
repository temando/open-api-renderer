module.exports = {
  collectCoverageFrom: [
    'src/**/*'
  ],
  mapCoverage: true,
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    '\\.styles$': '<rootDir>/test/__mocks__/stylesMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/__mocks__/fileMock.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  verbose: true,
  testPathIgnorePatterns: [
    'node_modules',
    'benchmark'
  ]
}

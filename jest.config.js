module.exports = {
  collectCoverageFrom: [
    'src/**/*'
  ],
  mapCoverage: true,
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  verbose: true
};

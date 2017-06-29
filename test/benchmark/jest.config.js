const baseConfig = require('../../jest.config')

module.exports = Object.assign({}, baseConfig, {
  verbose: false,
  testEnvironment: 'node',
  testPathIgnorePatterns: []
})

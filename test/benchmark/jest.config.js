const baseConfig = require('../../jest.config')

module.exports = Object.assign({}, baseConfig, {
  testEnvironment: 'node',
  testPathIgnorePatterns: []
})

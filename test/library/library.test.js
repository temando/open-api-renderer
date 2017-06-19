
describe('The built library', () => {
  it('imports as commonjs', () => {
    const OpenApiRenderer = require('../../dist/library').default

    expect(OpenApiRenderer).toBeInstanceOf(Function)

    console.log(OpenApiRenderer)
  })
})

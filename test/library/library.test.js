import React from 'react'

describe('The built library', () => {
  it('imports as commonjs', () => {
    const OpenApiRenderer = require('../../dist/library').default

    let component
    expect(() => {
      component = <OpenApiRenderer foo='bar' />
    }).not.toThrow()

    expect(component.props).toEqual({ foo: 'bar' })
  })
})

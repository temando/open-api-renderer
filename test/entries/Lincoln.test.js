import React from 'react'

describe('Lincoln', () => {
  it('imports as commonjs', () => {
    const Lincoln = require('../../dist/library').default

    let component
    expect(() => {
      component = <Lincoln foo='bar' />
    }).not.toThrow()

    console.log(component.props)

    expect(component.props).toEqual({ foo: 'bar' })
  })
})

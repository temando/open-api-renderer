import React from 'react'
import Lincoln from 'react-lincoln'

describe('Lincoln', () => {
  it('imports as commonjs', () => {
    let component
    expect(() => {
      component = <Lincoln foo='bar' />
    }).not.toThrow()

    expect(component.props).toEqual({ foo: 'bar' })
  })
})

import React from 'react'
import './Overlay.scss'

export default class Overlay extends React.PureComponent {
  render ({ children }) {
    return <div className='overlay'>{children}</div>
  }
}

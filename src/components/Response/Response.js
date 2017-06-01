import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import BodyContent from '../BodyContent/BodyContent'
import Description from '../Description/Description'
import Indicator from '../Indicator/Indicator'

import './Response.scss'

export default class Response extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      isOpen: false
    }
  }

  render () {
    const { response } = this.props
    const { code, description, schema, examples } = response
    const { isOpen } = this.state
    let status
    if (isOpen) {
      status = 'open'
    }

    const successCode = this.isSuccessCode(code)
    const hasDetails = schema || examples

    return (
      <div className='response'>
        <div className={classNames('response-info', {
          success: successCode,
          error: !successCode
        })} onClick={hasDetails ? this.onClick : undefined}>
          {hasDetails && <Indicator status={status} />}
          <span className='response-code'>{code}</span>
          {description && <Description isInline description={description} />}
        </div>
        {hasDetails && isOpen &&
          <BodyContent schema={schema} examples={examples} />
        }
      </div>
    )
  }

  onClick () {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({ isOpen: true })
    }
  }

  isSuccessCode (code) {
    return parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399
  }
}

Response.propTypes = {
  response: PropTypes.shape({
    code: PropTypes.string,
    description: PropTypes.string,
    schema: PropTypes.array,
    examples: PropTypes.array
  })
}

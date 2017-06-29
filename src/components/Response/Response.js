import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import BodyContent from '../BodyContent/BodyContent'
import Description from '../Description/Description'
import Indicator from '../Indicator/Indicator'
import { styles } from './Response.styles'

@styles
export default class Response extends PureComponent {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      isOpen: false
    }
  }

  render () {
    const { response, classes } = this.props
    const { code, description, schema, examples } = response
    const { isOpen } = this.state

    let indicatorDirection
    if (isOpen) {
      indicatorDirection = 'up'
    } else {
      indicatorDirection = 'down'
    }

    const successCode = this.isSuccessCode(code)
    const hasDetails = schema || examples

    return (
      <div className={classes.response}>
        <div className={classNames(classes.info, {
          [classes.success]: successCode,
          [classes.error]: !successCode,
          [classes.isClickable]: hasDetails
        })} onClick={hasDetails ? this.onClick : undefined}>
          <span className={classes.code}>{code}</span>
          {description && <Description isInline description={description} />}
          {hasDetails && <Indicator direction={indicatorDirection} />}
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
  }),
  classes: PropTypes.object
}

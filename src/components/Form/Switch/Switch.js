import React from 'react'
import { Switch as NativeBaseSwitch } from 'native-base'
import PropTypes from 'prop-types'

const Switch = (props) => {
  const { value, onChange, ...rest } = props

  return <NativeBaseSwitch {...rest} value={value} onValueChange={onChange} />
}

Switch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func
}

export default Switch

import { Switch as NativeBaseSwitch, theme } from 'native-base'

import PropTypes from 'prop-types'
import React from 'react'

const Switch = (props) => {
  const { value, onChange, ...rest } = props

  return (
    <NativeBaseSwitch
      onTrackColor={theme.CORE.COLORS['primary-default']}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
  )
}

Switch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func
}

export default Switch

import { Switch as NativeBaseSwitch } from 'native-base'
import PropTypes from 'prop-types'
import React from 'react'
import { theme } from '~/styles'

const Switch = (props) => {
  const { value, onChange, ...rest } = props

  return (
    <NativeBaseSwitch
      onTrackColor={theme.COLORS['primary-default']}
      onValueChange={onChange}
      isChecked={value}
      {...rest}
    />
  )
}

Switch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func
}

export default Switch

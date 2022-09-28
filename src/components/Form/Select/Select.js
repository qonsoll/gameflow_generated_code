import React from 'react'
import { Select as NativeBaseSelect } from 'native-base'
import PropTypes from 'prop-types'

const Select = (props) => {
  const { children, value, onChange, placeholder, ...rest } = props

  return (
    <NativeBaseSelect
      minWidth="100%"
      maxHeight="8"
      marginLeft={-1}
      {...rest}
      selectedValue={value}
      onValueChange={onChange}
      accessibilityLabel={placeholder}
      placeholder={placeholder}>
      {children}
    </NativeBaseSelect>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Select

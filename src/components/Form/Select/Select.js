import React from 'react'
import { Select as NativeBaseSelect } from 'native-base'
import PropTypes from 'prop-types'

const Select = (props) => {
  const { children, value, onChange, ...rest } = props

  return (
    <NativeBaseSelect {...rest} selectedValue={value} onValueChange={onChange}>
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

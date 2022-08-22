import React from 'react'
import { TextArea as NativeBaseArea } from 'native-base'
import PropTypes from 'prop-types'

const TextArea = (props) => {
  const { value, onChange, ...rest } = props

  return <NativeBaseArea {...rest} value={value} onChangeText={onChange} />
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextArea

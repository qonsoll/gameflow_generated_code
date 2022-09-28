import PropTypes from 'prop-types'
import React from 'react'
import { TextInput } from 'react-native'
import dynamicStyles from './TextArea.styles'

const TextArea = (props) => {
  const { value, onChange, ...rest } = props
  const styles = dynamicStyles()
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholderTextColor={styles.placeholderColor}
      multiline={true}
      numberOfLines={2}
      style={styles.textArea}
      {...rest}
    />
  )
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextArea

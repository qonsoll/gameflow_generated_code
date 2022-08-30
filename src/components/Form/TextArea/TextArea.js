import PropTypes from 'prop-types'
import React from 'react'
import { TextInput } from 'react-native'
import theme from '../../../../theme'

const TextArea = (props) => {
  const { value, onChange, ...rest } = props

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholderTextColor={theme.CORE.COLORS['grey-7']}
      multiline={true}
      numberOfLines={2}
      style={[
        theme.CORE.FONTS.body,
        { paddingHorizontal: 12, marginBottom: 8 }
      ]}
      {...rest}
    />
  )
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextArea

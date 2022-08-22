import Icon from 'react-native-vector-icons/MaterialIcons'
import { Input as NativeBaseInput } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './Input.styles'
import theme from '../../../../theme'
import { useState } from 'react'

const Input = (props) => {
  const { value, onChange, placeholder, style } = props
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')

  const styles = dynamicStyles()

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const handleClearInput = () => setInputValue('')
  const handleChangeInput = (text) => {
    onChange?.(text)
    setInputValue(text)
  }

  return (
    <NativeBaseInput
      variant="unstyled"
      value={inputValue}
      onChangeText={handleChangeInput}
      placeholder={placeholder}
      style={style || styles.input}
      onFocus={onFocus}
      onBlur={onBlur}
      InputRightElement={
        isFocused &&
        inputValue && (
          <TouchableOpacity
            onPress={handleClearInput}
            style={styles.iconWrapper}>
            <Icon
              name="close"
              size={12}
              style={styles.icon}
              color={theme.CORE.COLORS.white}
            />
          </TouchableOpacity>
        )
      }
    />
  )
}

export default Input

import { Input as NativeBaseInput, View } from 'native-base'
import React, { useEffect } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './Input.styles'
import { useState } from 'react'

const Input = (props) => {
  const {
    value,
    onChange,
    placeholder,
    style,
    rightIcon,
    onRightIconPress
  } = props
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

  const styleComputed = { ...styles.input, ...style }
  const { color, placeholderColor, clearColor, ...styleRest } = styleComputed

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  return (
    <NativeBaseInput
      variant="unstyled"
      value={inputValue}
      onChangeText={handleChangeInput}
      placeholder={placeholder}
      style={styleRest}
      placeholderTextColor={placeholderColor}
      color={color}
      onFocus={onFocus}
      onBlur={onBlur}
      InputRightElement={
        <View bg={styleComputed.backgroundColor} style={styles.rightElement}>
          {isFocused && inputValue ? (
            <TouchableOpacity
              onPress={handleClearInput}
              style={styles.iconWrapper}>
              <Icon
                name="close"
                size={12}
                style={styles.icon}
                color={clearColor}
              />
            </TouchableOpacity>
          ) : null}
          {rightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              style={styles.iconWrapper}>
              <Icon
                name={rightIcon}
                size={14}
                style={styles.icon}
                color={clearColor}
              />
            </TouchableOpacity>
          )}
        </View>
      }
    />
  )
}

export default Input

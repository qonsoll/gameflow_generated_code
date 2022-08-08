import React, { forwardRef, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { TextInput, Animated, Pressable } from 'react-native'
import { useTheme } from '@qonsoll/react-native-design'
import PasswordInput from './PasswordInput'
import dynamicStyles, { useStyles } from './styles'
import Icon from 'react-native-vector-icons/Feather'

const Input = forwardRef((props, ref) => {
  const {
    error,
    onChange,
    iconRight,
    iconSize,
    imageRight,
    onPress,
    style,
    disabled,
    ...rest
  } = props

  // [ADDITIONAL_HOOKS]
  const { theme } = useTheme()
  const animatedStyles = useStyles({ error, disabled })
  const [focused, setIsFocused] = useState(false)

  // [COMPONENT_STATE_HOOKS]
  const inputRef = useRef()

  // [COMPUTED_PROPERTIES]
  const styles = dynamicStyles(props, theme)

  // [CLEAN_FUNCTIONS]
  const onInputPress = (e) => {
    const focusRef = ref || inputRef
    focusRef?.current?.focus?.()
    onPress?.(e)
  }

  return (
    <Pressable onPress={!disabled ? onInputPress : undefined}>
      <Animated.View style={[styles.box, animatedStyles, style?.box]}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          ref={ref || inputRef}
          onChangeText={onChange}
          selectionColor={theme.CORE.COLORS['primary-lighten-1']}
          style={[styles.input, style?.input]}
          {...rest}
        />
        {!!imageRight && imageRight}
        {focused && (
          <Pressable>
            <Icon
              name="x-circle"
              size={16}
              color={theme.CORE.COLORS['grey-t-5']}
            />
          </Pressable>
        )}
      </Animated.View>
    </Pressable>
  )
})

Input.propTypes = {
  error: PropTypes.object,
  onChange: PropTypes.func,
  iconRight: PropTypes.string,
  iconSize: PropTypes.number
}

Input.Password = PasswordInput

export default Input

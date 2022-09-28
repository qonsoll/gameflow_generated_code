/* eslint-disable react-hooks/exhaustive-deps */
import { Animated, View } from 'react-native'
import { Box, Text } from '@qonsoll/react-native-design'
import React, {
  cloneElement,
  forwardRef,
  memo,
  useEffect,
  useState
} from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Image } from 'react-native'
import PropTypes from 'prop-types'
import { Warning } from '~/__constants__/assets'
import useStyles from './styles'

const MARGINS = {
  zero: 0,
  xs: 8,
  sm: 12,
  md: 20
}

const FromItem = (props) => {
  const {
    children,
    initialValue,
    label,
    margins = 'md',
    onError,
    labelColor,
    ...rest
  } = props

  // [ADDITIONAL_HOOKS]
  const { control, setFieldsValue } = useFormContext()
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error }
  } = useController({ control, defaultValue: initialValue, ...rest })

  const styles = useStyles(!!error?.message)

  // [COMPONENT_STATE_HOOKS]
  const [animatedError, setAnimatedError] = useState(error?.message)

  // [COMPUTED_PROPERTIES]
  const childrenProps = {
    onChange,
    value,
    name,
    ref,
    error,
    onBlur
  }
  const computedMargin = !animatedError
    ? MARGINS[margins]
    : MARGINS[margins] - 3

  // [USE_EFFECTS]
  useEffect(() => {
    initialValue && setFieldsValue({ [name]: initialValue })
  }, [])

  useEffect(() => {
    // To have smooth out error animation set it into inner state and remove text after animation end.
    if (animatedError && !error?.message) {
      onError?.(null)
      setTimeout(() => setAnimatedError(null), 220)
    } else {
      onError?.(error)
      setAnimatedError(error?.message)
    }
  }, [error])

  return (
    <Box mb={computedMargin}>
      {label && (
        <Text color={labelColor} variant="body1" mb={4}>
          {label}
        </Text>
      )}
      <FormItemChildren {...childrenProps}>{children}</FormItemChildren>
      {animatedError && (
        <View style={styles.error}>
          <Image source={Warning} style={styles.alert} />
          <Animated.Text style={styles.errorText}>
            {animatedError}
          </Animated.Text>
        </View>
      )}
    </Box>
  )
}

const FormItemChildren = memo(
  forwardRef(({ children, ...rest }, ref) => (
    <Box mb={2}>
      {typeof children === 'function'
        ? children({ ...rest, ref })
        : cloneElement(children, { ...rest, ref })}
    </Box>
  ))
)

FromItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.string
}

export default FromItem

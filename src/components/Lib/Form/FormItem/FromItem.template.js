import { Box, Text } from '@qonsoll/react-native-design'
import React, {
  cloneElement,
  forwardRef,
  memo,
  useEffect,
  useState
} from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import useStyles from './styles'

const MARGINS = {
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
    <Box mb={!animatedError ? MARGINS[margins] : MARGINS[margins] - 3}>
      {label && (
        <Text variant="body1" mb={4}>
          {label}
        </Text>
      )}
      <FormItemChildren {...childrenProps}>{children}</FormItemChildren>

      <Animated.Text style={styles.errorText}>{animatedError}</Animated.Text>
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

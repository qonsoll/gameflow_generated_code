import React, {
  cloneElement,
  useEffect,
  memo,
  useState,
  forwardRef
} from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Box, Text } from '@qonsoll/react-native-design'
import useStyles from './styles'

const MARGINS = {
  sm: 12,
  md: 20
}

const FromItem = (props) => {
  const { children, initialValue, label, margins = 'md', ...rest } = props

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
      setTimeout(() => setAnimatedError(null), 220)
    } else {
      setAnimatedError(error?.message)
    }
  }, [error])

  return (
    <Box mb={animatedError && MARGINS[margins]}>
      {label && <Text mb={10}>{label}</Text>}
      <FormItemChildren {...childrenProps}>{children}</FormItemChildren>

      {/* <Animated.Text style={styles.errorText}>{animatedError}</Animated.Text> */}
    </Box>
  )
}

const FormItemChildren = memo(
  forwardRef(({ children, ...rest }, ref) => (
    <Box>
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

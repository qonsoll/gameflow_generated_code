import React, {
  cloneElement,
  forwardRef,
  memo,
  useEffect,
  useState
} from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Box } from '@qonsoll/react-native-design'
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types'
import { Text } from 'native-base'

const MARGINS = { sm: 12, md: 20 }

const FromItem = (props) => {
  const {
    children,
    initialValue,
    label,
    labelColor,
    margins = 'md',
    ...rest
  } = props

  // [ADDITIONAL_HOOKS]
  const { control, setFieldsValue } = useFormContext()
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error }
  } = useController({ control, defaultValue: initialValue, ...rest })

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
      {label && (
        <Text color={labelColor} mb="10px">
          {label}
        </Text>
      )}
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

import React, { useState } from 'react'
import { Button } from 'native-base'
import LibPicker from 'react-native-date-picker'
import theme from '../../../../theme'
import dynamicStyles from './DatePicker.styles'
import PropTypes from 'prop-types'

const DatePicker = (props) => {
  const {
    value,
    buttonText,
    onConfirm,
    onCancel,
    open: isOpen,
    buttonStyles
  } = props

  // [STATES]
  const [date, setDate] = useState(value || new Date())
  const [open, setOpen] = useState(isOpen)

  // [COMPUTED_PROPERTIES]
  const styles = dynamicStyles({ buttonStyles })

  // [HANDLERS]
  const handleConfirm =
    onConfirm ||
    ((newDate) => {
      setOpen(false)
      setDate(newDate)
    })

  const handleCancel = onCancel || (() => setOpen(false))

  return (
    <>
      <Button
        style={styles.buttonStyles}
        variant="unstyled"
        onPress={() => setOpen(true)}>
        {buttonText || 'Select date'}
      </Button>
      <LibPicker
        modal
        open={open}
        androidVariant="iosClone"
        date={date}
        textColor={theme.CORE.COLORS.black}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  )
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  buttonText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  buttonStyles: PropTypes.object
}

export default DatePicker

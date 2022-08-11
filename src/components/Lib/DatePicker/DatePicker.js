import React, { useState } from 'react'

import { Input } from 'native-base'
import LibPicker from 'react-native-date-picker'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import theme from '../../../../theme'

// import dynamicStyles from './DatePicker.styles'

const DatePicker = (props) => {
  const { value, onConfirm, onCancel, open: isOpen } = props

  // [STATES]
  const [date, setDate] = useState(value || new Date())
  const [open, setOpen] = useState(isOpen)

  // [COMPUTED_PROPERTIES]
  // const styles = dynamicStyles({})
  const dateString = date.toString()

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
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Input value={dateString} isReadOnly />
      </TouchableOpacity>
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

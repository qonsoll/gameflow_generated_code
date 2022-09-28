import React, { useEffect, useState } from 'react'

import LibPicker from 'react-native-date-picker'
import PropTypes from 'prop-types'
import { Text } from '@qonsoll/react-native-design'
import { TouchableOpacity } from 'react-native'
import moment from 'moment'
import { theme } from '~/styles'

const DatePicker = (props) => {
  const {
    value,
    onChange,
    onCancel,
    open: isOpen,
    format = 'DD.MM.YYYY'
  } = props

  // [STATES]
  const [date, setDate] = useState(value instanceof Date ? value : new Date())
  const [open, setOpen] = useState(isOpen)

  // [COMPUTED_PROPERTIES]
  const dateString = moment(date).format(format)

  // [HANDLERS]
  const handleConfirm = onChange
    ? (newDate) => {
        onChange(newDate.toString())
        setOpen(false)
      }
    : (newDate) => {
        setOpen(false)
        setDate(newDate)
      }
  const handleCancel = onCancel || (() => setOpen(false))
  useEffect(() => {
    if (value !== undefined && typeof value === 'string') {
      setDate(new Date(value))
    }
  }, [value])

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text color="grey-7">{dateString}</Text>
      </TouchableOpacity>
      <LibPicker
        modal
        open={open}
        androidVariant="iosClone"
        date={date}
        textColor={theme.COLORS.black}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  )
}

DatePicker.propTypes = {
  value: PropTypes.string,
  buttonText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  buttonStyles: PropTypes.object
}

export default DatePicker

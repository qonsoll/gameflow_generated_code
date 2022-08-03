import { Input } from '@qonsoll/react-native-design'
import React from 'react'

const PasswordInput = (props) => {
  return <Input secureTextEntry keyboardType="visible-password" {...props} />
}

PasswordInput.propTypes = {}

export default PasswordInput

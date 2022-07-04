import React from 'react'
import { Input } from '@qonsoll/react-native-design'

const PasswordInput = (props) => {
  return <Input secureTextEntry keyboadrType="visible-password" {...props} />
}

PasswordInput.propTypes = {}

export default PasswordInput

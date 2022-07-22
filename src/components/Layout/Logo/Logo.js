import { Image } from 'react-native'
import { Logo as LogoImage } from '../../../constants/assets'
import React from 'react'

const Logo = (props) => {
  return <Image source={LogoImage} {...props} />
}

export default Logo

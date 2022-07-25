import FastImage from 'react-native-fast-image'
import { Logo as LogoImage } from '../../../constants/assets'
import React from 'react'

const Logo = (props) => {
  return <FastImage source={LogoImage} {...props} />
}

export default Logo

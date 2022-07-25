import FastImage from 'react-native-fast-image'
import { Logo as LogoImage } from '../../../constants/assets'
import React from 'react'

/**
 * It takes in a style prop, and returns a FastImage component with the LogoImage source, and the style
 * prop's tintColor
 * @param props - This is the props object that is passed to the component.
 * @returns A FastImage component with the LogoImage source and the tintColor style property.
 */
const Logo = (props) => {
  const { style, ...rest } = props

  return (
    <FastImage
      source={LogoImage}
      tintColor={style?.tintColor}
      style={style}
      {...rest}
    />
  )
}

export default Logo

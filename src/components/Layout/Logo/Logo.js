import FastImage from 'react-native-fast-image'
import { Logo as LogoImage } from '~/__constants__/assets'
import React from 'react'
import dynamicStyles from './styles'

/**
 * It takes in a style prop, and returns a FastImage component with the LogoImage source, and the style
 * prop's tintColor
 * @param props - This is the props object that is passed to the component.
 * @returns A FastImage component with the LogoImage source and the tintColor style property.
 */
const Logo = (props) => {
  const { style = {}, ...rest } = props
  const styles = dynamicStyles()
  const styleComputed = { ...styles.logo, ...style }

  return (
    <FastImage
      source={LogoImage}
      tintColor={styleComputed.tintColor}
      style={styleComputed}
      {...rest}
    />
  )
}

export default Logo

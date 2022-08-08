import { Image, TouchableOpacity } from 'react-native'

import { ArrowShortLeft3x } from '~/__constants__/assets'
import React from 'react'
import dynamicStyles from './styles'

/**
 * It renders an image of an arrow pointing left, and when you tap it, it calls the `onBack` function
 * @param props - The props that are passed to the component.
 * @returns A TouchableOpacity component with an onPress prop that calls the onBack function.
 */
const Back = (props) => {
  const { onBack, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  return (
    <TouchableOpacity onPress={onBack}>
      <Image source={ArrowShortLeft3x} style={styles.icon} {...rest} />
    </TouchableOpacity>
  )
}

export default Back

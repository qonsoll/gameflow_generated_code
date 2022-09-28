import { Dimensions, StyleSheet } from 'react-native'

import { theme } from '~/styles'

const { width, height } = Dimensions.get('screen')

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: { position: 'absolute', width, height },
    stopColor: theme.COMPONENTS.BackgroundGradient.backgroundColor,
    width: width,
    height: height
  })
}

export default dynamicStyles

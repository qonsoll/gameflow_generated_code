import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      position: 'absolute'
    },
    stopColor: theme.CORE.COLORS['primary-default']
  })
}

export default dynamicStyles

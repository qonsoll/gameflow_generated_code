import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
      tintColor: theme.CORE.COLORS.white
    }
  })
}

export default dynamicStyles

import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  return StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
      tintColor: theme.COLORS.white
    }
  })
}

export default dynamicStyles

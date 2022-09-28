import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  return StyleSheet.create({
    logo: {
      width: 120,
      height: 48,
      tintColor: theme.COLORS['primary-default']
    }
  })
}

export default dynamicStyles

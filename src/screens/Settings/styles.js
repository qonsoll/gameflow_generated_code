import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      marginBottom: 32
    },
    container: {
      width: '100%',
      backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
      borderRadius: theme.COMPONENTS.CARD.borderRadiuses.sm
    }
  })
}

export default dynamicStyles

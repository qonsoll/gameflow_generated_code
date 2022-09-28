import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      marginBottom: 32
    },
    container: {
      width: '100%',
      backgroundColor: theme.COMPONENTS.Card.backgroundColor,
      borderRadius: theme.COMPONENTS.Card.borderRadiuses.sm
    }
  })
}

export default dynamicStyles

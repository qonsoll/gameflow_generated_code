import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      paddingHorizontal: 12,
      marginBottom: 32
    },
    listWrapper: {
      backgroundColor: theme.COMPONENTS.Card.backgroundColor,
      borderRadius: theme.COMPONENTS.Card.borderRadiuses.sm
    }
  })

export default dynamicStyles

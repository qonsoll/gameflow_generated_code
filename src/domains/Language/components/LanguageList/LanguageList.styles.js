import { StyleSheet } from 'react-native'
import theme from '../../../../../theme'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      paddingHorizontal: 12,
      marginBottom: 32
    },
    listWrapper: {
      marginHorizontal: 16,
      backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
      borderRadius: theme.COMPONENTS.CARD.borderRadiuses.sm
    }
  })

export default dynamicStyles

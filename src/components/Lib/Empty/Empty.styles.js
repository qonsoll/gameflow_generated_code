import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: { backgroundColor: theme.COLORS['primary-default'] }
  })

export default dynamicStyles

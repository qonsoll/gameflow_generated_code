import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      backgroundColor: theme.CORE.COLORS['primary-default']
    }
  })

export default dynamicStyles

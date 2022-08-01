import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    screenContainer: {
      backgroundColor: theme.components.PAGE_WRAPPER.backgroundColor,
      height: '100%'
    }
  })
}

export default dynamicStyles

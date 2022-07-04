import { Dimensions, StyleSheet } from 'react-native'

import theme from '../../../theme'

const WINDOW_HEIGHT = Dimensions.get('window').height

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: WINDOW_HEIGHT - 134,
      paddingHorizontal: 24
    },
    saveButton: {
      position: 'absolute',
      bottom: 50,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      width: 230,
      borderRadius: 8,
      backgroundColor: theme.CORE.COLORS['primary-default'],
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.06,
      shadowRadius: 4
    }
  })
}

export default dynamicStyles

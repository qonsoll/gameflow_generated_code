import { Dimensions, StyleSheet } from 'react-native'

import theme from '../../../../theme'

const { width, height } = Dimensions.get('screen')

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      position: 'absolute',
      alignItems: 'center',
      width,
      height
    },
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    logo: {
      width: 120,
      height: 86,
      tintColor: theme.CORE.COLORS.white,
      marginTop: 8
    },
    topHeaderLine: {
      backgroundColor: theme.CORE.COLORS['primary-default'],
      position: 'absolute',
      height: 20,
      width: width,
      top: 0
    },
    leftButton: { position: 'absolute', left: 0, paddingHorizontal: 24 },
    icon: {
      width: 32,
      height: 32,
      tintColor: theme.CORE.COLORS.white
    },
    keyboard: {
      justifyContent: 'center',
      height: height,
      width: '100%'
    },
    container: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 32
    },
    bottomContainer: {
      position: 'absolute',
      bottom: '12%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 12
    }
  })
}

export default dynamicStyles

import { Dimensions, StyleSheet } from 'react-native'

import theme from '../../../../theme'

const { width, height } = Dimensions.get('screen')

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      position: 'absolute',
      width,
      height,
      alignItems: 'center'
    },
    boll: {
      width: 70,
      height: 140,
      tintColor: theme.CORE.COLORS.white,
      position: 'absolute',
      top: 80,
      right: 24,
      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 2
      },
      shadowOpacity: 0.2,
      shadowRadius: 2
    },
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 32
    },
    logo: {
      width: 140,
      height: 100,
      tintColor: theme.CORE.COLORS.white
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
    container: {
      width: '100%',
      flex: 1,
      paddingHorizontal: 32,
      justifyContent: 'center'
    },
    googleButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 52,
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      marginBottom: 12
    },
    socialIcon: { width: 28, height: 28, marginRight: 8 },
    appleButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 52,
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.06,
      shadowRadius: 4
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 24
    },
    leftDivider: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.CORE.COLORS['white-t-lighten1']
    },
    rightDivider: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.CORE.COLORS['white-t-lighten1']
    },
    emailButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 52,
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      marginBottom: 32
    },
    bottomSectionWrapper: { flexDirection: 'row', justifyContent: 'center' }
  })
}

export default dynamicStyles

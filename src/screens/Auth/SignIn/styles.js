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
      shadowRadius: 4
    },
    bottomSectionWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 32
    }
  })
}

export default dynamicStyles

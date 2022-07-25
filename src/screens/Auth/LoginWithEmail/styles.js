import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      width,
      height
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
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 32
    },
    titlePropsWithKeyboard: { mt: 64, mb: 8, variant: 'h3' },
    titleProps: { my: 0, variant: 'h2' }
  })
}

export default dynamicStyles

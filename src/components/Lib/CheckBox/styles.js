import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, props) => {
  const { size = 20, borderRadius, rounded = true, value } = props

  return StyleSheet.create({
    wrapperStyles: {
      width: size,
      height: size,
      borderWidth: 1,
      borderRadius: rounded ? size / 2 : borderRadius,
      borderColor: '#afb5bb',
      shadowColor: '#000',
      backgroundColor: value
        ? theme.CORE.COLORS['primary-default']
        : 'transparent',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.5,
      shadowRadius: 1
    }
  })
}

export default dynamicStyles

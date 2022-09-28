import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  const component = theme.COMPONENTS.ScreenLoading

  return StyleSheet.create({
    wrapper: { flex: 1 },
    gradient: component.gradient,
    backgroundColor: component.backgroundColor,
    spinnerColor: theme.COMPONENTS.Typography.color,
    spinnerWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: component.backgroundColor
    }
  })
}

export default dynamicStyles

import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (props) => {
  const component = theme.COMPONENTS.Input

  return StyleSheet.create({
    placeholderColor: component.placeholderColor,
    textArea: {
      paddingHorizontal: 12,
      marginBottom: 6,
      color: component.color
    }
  })
}

export default dynamicStyles

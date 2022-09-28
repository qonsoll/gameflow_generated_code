import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (props) => {
  const component = theme.COMPONENTS.Input

  return StyleSheet.create({
    input: {
      fontFamily: theme.FONT_FAMILIES.body,
      fontSize: theme.FONT_SIZES.body,
      backgroundColor: theme.COLORS['input-background'],
      color: component.color,
      placeholderColor: component.placeholderColor,
      clearColor: component.clearColor
    },
    icon: { textAlign: 'center' },
    iconWrapper: {
      borderRadius: 10,
      width: 16,
      height: 16,
      marginRight: 12
    },
    rightElement: {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  })
}

export default dynamicStyles

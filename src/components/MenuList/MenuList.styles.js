import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = ({ dividerMargin = 0, dividerWidth } = {}) => {
  const containerMaxWidth = theme.COMPONENTS.CONTAINER.maxWidth
  const dividerWidthComputed = containerMaxWidth - 2 ** dividerMargin

  return StyleSheet.create({
    divider: {
      marginLeft: dividerMargin,
      width: dividerWidth || dividerWidthComputed
    },
    item: {
      height: theme.COMPONENTS.BUTTONS.sizes.md.height,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    textWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80%'
    },
    iconContainer: {
      backgroundColor: 'green',
      borderRadius: 6,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16
    }
  })
}

export default dynamicStyles

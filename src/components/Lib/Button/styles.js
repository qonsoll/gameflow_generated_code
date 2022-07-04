import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, props) => {
  const {
    size,
    variant,
    block,
    shape,
    children,
    text,
    disabled,
    mr,
    borderRadius
  } = props

  const themeBorderRadius = theme.components.BUTTONS.borderRadius
  const isBorderRadiusPassed =
    !isNaN(themeBorderRadius[borderRadius]) || themeBorderRadius[borderRadius]

  return StyleSheet.create({
    buttonContainer: {
      height: theme.components.BUTTONS[size].height,
      width:
        shape === 'square' && !(children || text) && !block
          ? theme.components.BUTTONS[size].height
          : undefined,
      flex: block ? 1 : undefined,
      backgroundColor: disabled
        ? theme.components.BUTTONS.variant['grey-light'].backgroundColor
        : theme.components.BUTTONS.variant[variant].backgroundColor,
      paddingHorizontal: shape !== 'square' && !block ? 16 : undefined,
      borderRadius: isBorderRadiusPassed
        ? themeBorderRadius[borderRadius]
        : themeBorderRadius[size],
      marginRight: mr || 0
    },
    imageIcon: {
      height: theme.CORE.ICON_SIZES[size] - 4,
      width: theme.CORE.ICON_SIZES[size] - 4
    }
  })
}

export default dynamicStyles

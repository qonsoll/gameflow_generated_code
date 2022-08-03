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

  const themeBorderRadius = theme.COMPONENTS.BUTTONS.borderRadiuses
  const isBorderRadiusPassed =
    !isNaN(themeBorderRadius[borderRadius]) || themeBorderRadius[borderRadius]

  return StyleSheet.create({
    buttonContainer: {
      height: theme.COMPONENTS.BUTTONS.sizes[size].height,
      width:
        shape === 'square' && !(children || text) && !block
          ? theme.COMPONENTS.BUTTONS.sizes[size].height
          : undefined,
      flex: block ? 1 : undefined,
      backgroundColor: disabled
        ? theme.COMPONENTS.BUTTONS.variants.lightGrey.backgroundColor
        : theme.COMPONENTS.BUTTONS.variants[variant].backgroundColor,
      paddingHorizontal: shape !== 'square' && !block ? 16 : undefined,
      borderRadius: isBorderRadiusPassed
        ? themeBorderRadius[borderRadius]
        : themeBorderRadius[size],
      marginRight: mr || 0
    },
    imageIcon: {
      height: theme.CORE.ICON_SIZES[size] - 4,
      width: theme.CORE.ICON_SIZES[size] - 4
    },
    textVariant: 'body1',
    textTransform: 'none'
  })
}

export default dynamicStyles

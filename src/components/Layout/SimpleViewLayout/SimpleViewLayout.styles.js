import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = (title, imageUri) => {
  const imageSize = theme.EXTENSIONS.ITEM_TOKENS.SIZE_TOKENS.md.height
  const imageMargin = 8

  const containerWidth = theme.COMPONENTS.CONTAINER.maxWidth
  const iconSize = theme.COMPONENTS.ICON.iconSizes.sm
  const titleWidth = containerWidth - iconSize
  const isTitleToBig = title.length > 30 || containerWidth < 200
  const descriptionMaxWidth = imageUri
    ? containerWidth - imageSize - imageMargin
    : containerWidth

  return StyleSheet.create({
    image: {
      height: imageSize,
      width: imageSize,
      marginRight: imageMargin,
      borderRadius: theme.EXTENSIONS.CORNERS.md
    },
    description: { maxWidth: descriptionMaxWidth },
    title: { isToBig: isTitleToBig, width: titleWidth },
    icon: {
      size: iconSize,
      color: theme.COMPONENTS.ICON.variants.grey.backgroundColor
    },
    container: { maxWidth: containerWidth }
  })
}

export default dynamicStyles

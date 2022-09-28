import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (title, imageUri) => {
  const imageSize = 50
  const imageMargin = 8

  const containerWidth = theme.COMPONENTS.Container.maxWidth
  const iconSize = theme.COMPONENTS.Icon.iconSizes.sm
  const titleWidth = containerWidth - iconSize
  const isTitleToBig = title?.length > 30 || containerWidth < 200
  const descriptionMaxWidth = imageUri
    ? containerWidth - imageSize - imageMargin
    : containerWidth

  return StyleSheet.create({
    image: {
      height: imageSize,
      width: imageSize,
      marginRight: imageMargin,
      borderRadius: theme.BORDER_RADIUSES.sm
    },
    description: { maxWidth: descriptionMaxWidth },
    title: { isToBig: isTitleToBig, width: titleWidth },
    icon: {
      size: iconSize,
      color: theme.COLORS['text-caption-color']
    },
    container: { maxWidth: containerWidth }
  })
}

export default dynamicStyles

import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (title, imageUri, isLast) => {
  return StyleSheet.create({
    container: {
      borderRadius: theme.BORDER_RADIUSES.md,
      marginBottom: isLast ? 164 : imageUri && 32,
      backgroundColor: theme.COLORS['card-background']
    },
    image: {
      width: theme.COMPONENTS.Container.maxWidth,
      height: (theme.COMPONENTS.Container.maxWidth / 4) * 3,
      resizeMode: 'contain',
      borderRadius: theme.BORDER_RADIUSES.md,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      padding: 16
    },
    title: { fontWeight: theme.FONT_WEIGHTS.semibold },
    description: { color: theme.COLORS['text-caption-color'] },
    date: {
      color: theme.COLORS['text-caption-color']
    },
    textWrapper: {
      paddingBottom: 12,
      paddingHorizontal: 12
    },
    dateWrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    dateIcon: {
      color: theme.COLORS['text-caption-color']
    },
    titleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      marginBottom: 8
    }
  })
}

export default dynamicStyles

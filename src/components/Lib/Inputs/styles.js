import { Animated, StyleSheet } from 'react-native'
import { useEffect, useRef } from 'react'

import { theme } from '~/styles'

const dynamicStyles = (props) => {
  return StyleSheet.create({
    box: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 6,
      borderWidth: 1,
      backgroundColor: props.disabled
        ? theme.COLORS['input-background-disabled']
        : theme.COLORS['input-background'],
      borderRadius: theme.BORDER_RADIUSES.md,
      paddingRight: props.iconRight || props.imageRight ? 10 : 30
    },
    input: {
      fontSize: 16,
      flex: 1,
      color: props.disabled
        ? theme.COLORS['input-placeholder-color']
        : theme.COLORS['input-color'],
      paddingHorizontal: 12
    },
    placeholderColor: theme.COLORS['input-placeholder-color']
  })
}
const useStyles = ({ error, disabled }) => {
  const borderColorAnimation = useRef(new Animated.Value(0)).current

  const borderColor = borderColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      disabled
        ? theme.COLORS['input-border-color-disabled']
        : theme.COLORS['input-border-color'],
      theme.COLORS['danger-default']
    ]
  })
  useEffect(() => {
    Animated.timing(borderColorAnimation, {
      toValue: error?.message ? 1 : 0,
      duration: 220,
      useNativeDriver: false
    }).start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return { borderColor }
}

export { useStyles }
export default dynamicStyles

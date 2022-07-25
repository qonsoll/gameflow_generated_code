import { Animated, StyleSheet } from 'react-native'
import { useEffect, useRef } from 'react'

import { useTheme } from '@qonsoll/react-native-design'

const dynamicStyles = (props, theme) => {
  return StyleSheet.create({
    box: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      backgroundColor: props.disabled
        ? theme.CORE.COLORS['input-background-disabled']
        : theme.CORE.COLORS['input-background'],
      borderRadius: theme.CORE.BORDER_RADIUSES.md2,
      paddingRight: props.iconRight || props.imageRight ? 10 : 30
    },
    input: {
      fontSize: 16,
      flex: 1,
      color: props.disabled
        ? theme.CORE.COLORS['grey-t-8']
        : theme.CORE.COLORS['grey-t-4']
    }
  })
}
const useStyles = ({ error, disabled }) => {
  const { theme } = useTheme()
  const borderColorAnimation = useRef(new Animated.Value(0)).current

  const borderColor = borderColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      disabled
        ? theme.CORE.COLORS['input-border-color-disabled']
        : theme.CORE.COLORS['input-border-color'],
      theme.CORE.COLORS['danger-default']
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

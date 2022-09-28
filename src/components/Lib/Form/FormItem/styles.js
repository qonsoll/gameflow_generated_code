import { useEffect, useRef } from 'react'

import { Animated } from 'react-native'
import { useTheme } from '@qonsoll/react-native-design'

const useStyles = (error) => {
  // [ADDITIONAL_HOOKS]
  const { theme } = useTheme()

  // [COMPONENT_STATE_HOOKS]
  const opacity = useRef(new Animated.Value(0)).current
  const translateYAnimation = useRef(new Animated.Value(0)).current

  const translateY = translateYAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-7, 0]
  })

  // [USE_EFFECTS]
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: error ? 1 : 0,
      duration: 220,
      useNativeDriver: true
    }).start()
    Animated.timing(translateYAnimation, {
      toValue: error ? 1 : 0,
      duration: 220,
      useNativeDriver: true
    }).start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return {
    errorText: {
      opacity,
      color: theme.COLORS['danger-lighten-1'],
      transform: [{ translateY }],
      lineHeight: 12,
      fontSize: 12
    },
    alert: {
      width: 12,
      height: 16,
      marginRight: 6
    },
    error: {
      backgroundColor: theme.COLORS['danger-lighten-5'],
      paddingHorizontal: 10,
      paddingVertical: 4,
      marginTop: 2,
      marginBottom: 4,
      borderRadius: theme.BORDER_RADIUSES.sm,
      fontWeight: 'semibold',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
}

export default useStyles

import { useTheme } from '@qonsoll/react-native-design'
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

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
  }, [error])

  return {
    errorText: {
      opacity,
      color: theme.CORE.COLORS['danger-default'],
      transform: [{ translateY }]
    }
  }
}

export default useStyles

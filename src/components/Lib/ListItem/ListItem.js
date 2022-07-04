import React, { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

const ListItem = (props) => {
  const { i, children } = props

  // [COMPONENT STATE HOOKS]
  const [state, setState] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current

  // [USE EFFECTS]
  useEffect(() => {
    setTimeout(function () {
      setState(true)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start()
    }, i * 50)
  }, [fadeAnim, i])

  return (
    state && (
      <Animated.View
        style={{
          // Bind opacity to animated value
          opacity: fadeAnim
        }}>
        {children}
      </Animated.View>
    )
  )
}

export default ListItem

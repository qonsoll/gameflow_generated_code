import React, { useState } from 'react'

import { Animated } from 'react-native'

const SwipeableItem = (props) => {
  const {
    progress,
    onClose,
    isLeft,
    actionWidth,
    style,
    children,
    ...rest
  } = props

  // [COMPONENT_STATE_HOOKS]
  const [itemWidth, setItemWidth] = useState(0)

  // [COMPUTED_PROPERTIES]
  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [isLeft ? -itemWidth : itemWidth, 0]
  })

  // [CLEAN_FUNCTIONS]
  const getItemWidth = (event) => setItemWidth(event.nativeEvent.layout.width)

  return (
    <Animated.View
      onLayout={getItemWidth}
      style={[
        {
          width: actionWidth,
          flexDirection: 'row',
          transform: [{ translateX }]
        },
        isLeft ? { marginRight: 10 } : { marginLeft: 10 },
        style
      ]}
      {...rest}>
      {children(onClose)}
    </Animated.View>
  )
}

export default SwipeableItem

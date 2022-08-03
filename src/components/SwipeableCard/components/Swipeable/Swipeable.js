import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import NativeSwipeable from 'react-native-gesture-handler/Swipeable'
import SwipeableItem from './SwipeableItem'

const Swipeable = (props) => {
  const {
    children,
    rightActions,
    leftActions,
    actionWidth = '20%',
    leftActionsContainerProps,
    rightActionsContainerProps,
    disabled,
    ...rest
  } = props
  // [COMPONENT_STATE_HOOKS]
  const swipeableRow = useRef(null)

  // [CLEAN_FUNCTIONS]
  const closeItems = () => swipeableRow.current.close()
  return (
    <NativeSwipeable
      ref={!disabled ? swipeableRow : undefined}
      renderRightActions={
        !disabled &&
        rightActions &&
        ((progress) => (
          <SwipeableItem
            progress={progress}
            onClose={closeItems}
            actionWidth={actionWidth}
            {...rightActionsContainerProps}>
            {rightActions}
          </SwipeableItem>
        ))
      }
      renderLeftActions={
        !disabled &&
        leftActions &&
        ((progress) => (
          <SwipeableItem
            progress={progress}
            onClose={closeItems}
            actionWidth={actionWidth}
            isLeft
            {...leftActionsContainerProps}>
            {leftActions}
          </SwipeableItem>
        ))
      }
      {...rest}>
      {children}
    </NativeSwipeable>
  )
}

Swipeable.propTypes = {
  children: PropTypes.node,
  rightActions: PropTypes.func,
  leftActions: PropTypes.func,
  actionWidth: PropTypes.string.isRequired,
  leftActionsContainerProps: PropTypes.object,
  rightActionsContainerProps: PropTypes.object,
  overshootLeft: PropTypes.bool,
  overshootRight: PropTypes.bool,
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool
}

export default Swipeable

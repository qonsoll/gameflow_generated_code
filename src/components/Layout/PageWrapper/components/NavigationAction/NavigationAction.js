import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { theme } from '~/styles'

/**
 * It takes in a bunch of props and returns a TouchableOpacity component with some Icon and Text
 * components inside
 * @param action - The function to be called when the button is pressed
 * @param text - The text to be displayed in the button
 * @param leftIcon - The name of the icon to be displayed on the left side of the button.
 * @param leftIconColor - The color of the left icon
 * @param rightIconColor - The color of the right icon.
 * @param rightIcon - The name of the icon you want to use.
 * @param style - The style of the TouchableOpacity
 * @returns A TouchableOpacity component with a child Icon component and a child Text component.
 */
const NavigationAction = (props) => {
  const {
    action,
    text,
    leftIcon,
    leftIconColor,
    rightIconColor,
    rightIcon,
    style
  } = props

  return (
    <TouchableOpacity onPress={action} style={style}>
      {!!leftIcon && (
        <Icon
          name={leftIcon}
          size={24}
          color={leftIconColor || theme.COLORS['primary-default']}
        />
      )}
      {!!text && <Text color="primary-default">{text}</Text>}
      {!!rightIcon && (
        <Icon
          name={rightIcon}
          size={24}
          color={rightIconColor || theme.COLORS['primary-default']}
        />
      )}
    </TouchableOpacity>
  )
}

NavigationAction.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  leftIcon: PropTypes.any,
  leftIconColor: PropTypes.string,
  rightIconColor: PropTypes.string,
  rightIcon: PropTypes.any,
  style: PropTypes.any
}

export default NavigationAction

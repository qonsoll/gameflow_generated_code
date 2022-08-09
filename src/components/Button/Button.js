import { TouchableOpacity, View } from 'react-native'
import { Text } from '@qonsoll/react-native-design'
import React from 'react'
import dynamicStyles from './Button.styles'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { children, textVariant, style, iconRight, iconLeft, onPress } = props
  const styles = dynamicStyles(style)

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.textWrapper}>
        {iconLeft}
        <Text ml={iconLeft ? 12 : 0} variant={textVariant || 'body1'}>
          {children}
        </Text>
      </View>
      {iconRight}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  textVariant: PropTypes.string,
  style: PropTypes.object,
  iconRight: PropTypes.node,
  iconLeft: PropTypes.node,
  onPress: PropTypes.func
}

export default Button

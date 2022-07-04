import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Box, Spinner, Text, useTheme } from '@qonsoll/react-native-design'

import dynamicStyles from './styles'

const Button = (props) => {
  const {
    onPress,
    text,
    iconName,
    iconSize,
    size = 'md',
    children,
    icon,
    variant = 'default',
    block,
    shape,
    disabled,
    loading,
    mr,
    fontWeight,
    style,
    borderRadius,
    buttonIcon,
    disabledButtonIcon
  } = props

  // [ADDITIONAL_HOOKS]
  const { theme } = useTheme()

  const styles = dynamicStyles(theme, {
    onPress,
    text,
    iconName,
    iconSize,
    size,
    children,
    icon,
    variant,
    block,
    shape,
    disabled,
    mr,
    borderRadius
  })

  const color = disabled
    ? theme.components.BUTTONS.variant['grey-light'].color
    : theme.components.BUTTONS.variant[variant].color

  return (
    <TouchableOpacity
      onPress={(!disabled || !loading) && onPress}
      activeOpacity={theme.components.BUTTONS.hoverOpacity}
      style={[styles.buttonContainer, style]}
      disabled={disabled || loading}>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="row">
        {loading ? (
          <Box mr={text || children ? 4 : undefined}>
            <Spinner colorCode={color || 'black'} />
          </Box>
        ) : buttonIcon ? (
          <Box mr={text || children ? 8 : undefined}>
            {cloneElement(
              disabled ? disabledButtonIcon || buttonIcon : buttonIcon,
              {
                ...styles.imageIcon,
                ...(iconSize && {
                  height: iconSize,
                  width: iconSize
                })
              }
            )}
            {/* <FastImage
              tintColor={color}
              style={[
                styles.imageIcon,
                iconSize && { height: iconSize, width: iconSize }
              ]}
              source={AppStyles.iconSet[imageName]}
            /> */}
          </Box>
        ) : (
          icon ||
          (iconName && (
            <Box mr={text || children ? 4 : undefined}>
              {cloneElement(
                disabled ? disabledButtonIcon || buttonIcon : buttonIcon,
                {
                  ...styles.imageIcon,
                  ...(iconSize && {
                    height: iconSize,
                    width: iconSize
                  })
                }
              )}
              {/* <IconOutline
                name={iconName}
                color={color}
                size={iconSize ?? theme.components.BUTTONS.iconSize[size]}
              /> */}
            </Box>
          ))
        )}
        {(text || children) && (
          <Text
            variant={theme.components.BUTTONS.textSize}
            textTransform={theme.components.BUTTONS.text.textTransform}
            fontWeight={fontWeight || theme.components.BUTTONS.fontWeight}
            styleOverride={{ color }}>
            {text || children}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  imageName: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  iconSize: PropTypes.number,
  iconName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'transparent']),
  block: PropTypes.bool,
  shape: PropTypes.oneOfType([PropTypes.oneOf(['square']), PropTypes.bool]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  borderRadius: PropTypes.string,
  style: PropTypes.object,
  fontWeight: PropTypes.string
}

export default Button

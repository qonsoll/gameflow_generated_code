import { Divider, Text } from 'native-base'
import React, { Fragment } from 'react'
import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import dynamicStyles from './MenuList.styles'
import { theme } from '~/styles'

/**
 * It returns a list of menu items.
 * @param data - an array of objects that contain the following properties:
 * @param dividerWidth - The width of the divider
 * @param dividerMarginLeft - The margin left of the divider
 * @returns A function that takes in data, dividerWidth, and dividerMarginLeft as arguments.
 */
const MenuList = (props) => {
  const { data, dividerWidth, dividerMarginLeft } = props

  const dividerMargin = dividerMarginLeft || 4
  const styles = dynamicStyles({ dividerMargin, dividerWidth })

  return data
    ? data.map((item, index) => (
        <Fragment key={index}>
          <TouchableOpacity onPress={item.action} style={styles.item}>
            <View style={styles.textWrapper}>
              {item?.icon && (
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: item.iconBackgroundColor }
                  ]}>
                  <Icon name={item.icon} size={20} color={theme.COLORS.white} />
                </View>
              )}
              <Text numberOfLines={1}>{item.text}</Text>
            </View>
            <View flexDirection="row">
              <Text color="text-caption-color">{item.description}</Text>
              {item.isArrowShow && (
                <Icon
                  name="chevron-right"
                  size={styles.icon.size}
                  color={styles.icon.color}
                />
              )}
            </View>
          </TouchableOpacity>
          {data?.length - 1 !== index && (
            <Divider
              width={styles.divider.width}
              ml={styles.divider.marginLeft}
            />
          )}
        </Fragment>
      ))
    : null
}

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dividerWidth: PropTypes.number,
  dividerMarginLeft: PropTypes.number
}

export default MenuList

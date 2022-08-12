import React, { Fragment } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Divider } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './MenuList.styles'
import theme from '../../../theme'

const MenuList = (props) => {
  const { data, dividerWidth, dividerMarginLeft } = props

  const dividerMargin = dividerMarginLeft || 4
  const styles = dynamicStyles({ dividerMargin, dividerWidth })

  return data ? (
    data.map((item, index) => (
      <Fragment key={index}>
        <TouchableOpacity onPress={item.action} style={styles.item}>
          <View style={styles.textWrapper}>
            {item?.icon && (
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.iconBackgroundColor }
                ]}>
                <Icon
                  name={item.icon}
                  size={20}
                  color={theme.CORE.COLORS.white}
                />
              </View>
            )}
            <Text numberOfLines={1} variant="body1" color={item.textColor}>
              {item.text}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text variant="body1" color="grey-6" mr={4}>
              {item.description}
            </Text>
            {item.isArrowShow && (
              <Icon
                name="chevron-right"
                size={24}
                color={theme.CORE.COLORS['grey-7']}
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
  ) : (
    <Fragment />
  )
}

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dividerWidth: PropTypes.number,
  dividerMarginLeft: PropTypes.number
}

export default MenuList

import { View, TouchableOpacity, Dimensions } from 'react-native'
import React, { Fragment } from 'react'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from '../../screens/Settings/styles'
import theme from '../../../theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'native-base'
import PropTypes from 'prop-types'

const windowWidth = Dimensions.get('window').width

const MenuList = (props) => {
  const { data } = props

  const styles = dynamicStyles()

  return data ? (
    data.map((item, index) => (
      <Fragment key={item}>
        <TouchableOpacity onPress={item.action} style={styles.item}>
          <View style={styles.textWrapper}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: item.iconBackgroundColor
                }
              ]}>
              <Icon
                name={item.icon}
                size={20}
                color={theme.CORE.COLORS.white}
              />
            </View>
            <Text numberOfLines={1} variant="body1" color={item.textColor}>
              {item.text}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text variant="body1" color="grey-6" mr={4}>
              {item.description}
            </Text>
            {!!item.isArrowShow && (
              <Icon
                name="chevron-right"
                size={24}
                color={theme.CORE.COLORS['grey-7']}
              />
            )}
          </View>
        </TouchableOpacity>
        {data?.length - 1 !== index && (
          <Divider width={windowWidth - 86} ml={62} />
        )}
      </Fragment>
    ))
  ) : (
    <Fragment />
  )
}

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MenuList

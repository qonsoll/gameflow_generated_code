import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/Feather'
import PropTypes from 'prop-types'
import RadialGradient from 'react-native-radial-gradient'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

const { width } = Dimensions.get('window')
const isIOS = Platform.OS === 'ios'
const isIPad = isIOS && Platform?.isPad
const itemWidth = isIPad ? width / 10 : width / 5

function TabItem(props) {
  const {
    title,
    onPress,
    focus,
    routeName,
    isAdd,
    onAddPress,
    isRightBorder,
    isLeftBorder,
    icon
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const { t } = useTranslations()

  const [stops, setStops] = useState([0.5, 0.5, 0.4, 0.4])

  // [CLEAN_FUNCTIONS]
  const onTabPress = () => {
    onPress(routeName)
  }

  useEffect(() => {
    Platform?.OS !== 'ios' && setStops([0.5, 0.5, 0.39, 0.4])
  }, [])

  if (isAdd) {
    return (
      <RadialGradient
        style={styles.radialGradientContainer}
        colors={styles.addFooterColor}
        stops={stops}
        center={[itemWidth / 2, 0]}
        radius={isIPad ? itemWidth + 3 : itemWidth + 5}>
        <View style={styles.addButtonContainer}>
          <View style={styles.addButtonCircleContainer} />
          <TouchableOpacity onPress={onAddPress} style={[styles.addContainer]}>
            <Icon {...styles.addIcon} name="plus" />
          </TouchableOpacity>
        </View>
      </RadialGradient>
    )
  }

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isRightBorder && styles.rightButtonContainer,
        isLeftBorder && styles.leftButtonContainer
      ]}
      activeOpacity={1}
      onPress={onTabPress}>
      {isRightBorder && <View style={styles.leftShadow} />}
      {isLeftBorder && <View style={styles.rightShadow} />}
      {!isRightBorder && !isLeftBorder && <View style={styles.shadow} />}
      <Image
        style={[
          styles.icon,
          focus ? styles.focusTintColor : styles.unFocusTintColor
        ]}
        source={icon}
      />
      <Text
        style={[
          styles.title,
          focus ? styles.focusTextColor : styles.unFocusTextColor
        ]}>
        {t(title)}
      </Text>
    </TouchableOpacity>
  )
}

TabItem.propTypes = {
  route: PropTypes.object,
  onPress: PropTypes.func,
  focus: PropTypes.bool,
  tabIcons: PropTypes.object,
  routeName: PropTypes.string,
  isAdd: PropTypes.bool,
  onAddPress: PropTypes.func,
  isRightBorder: PropTypes.bool,
  isLeftBorder: PropTypes.bool
}

export default TabItem

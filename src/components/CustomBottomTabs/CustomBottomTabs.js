import { LayoutAnimation, View } from 'react-native'
import React, { useEffect } from 'react'

import CustomTabItem from './CustomTabItem'
import LinearGradient from 'react-native-linear-gradient'
import { MENU_CONFIG } from './constants'
import dynamicStyles from './styles'
import { getIsBottomTabsVisible } from '../../helpers'
import { useColorScheme } from 'react-native-appearance'
import { useTheme } from '@qonsoll/react-native-design'

export default function BottomTabs(props) {
  const { state, navigation, colorTitle } = props

  // [ADDITIONAL_HOOKS]
  const colorScheme = useColorScheme()
  const { theme } = useTheme()
  const styles = dynamicStyles(colorScheme, theme)
  // [COMPUTED_PROPERTIES]
  const customRoutes = [...state.routes]
  const stateIndex = state.index
  const isBottomTabs = getIsBottomTabsVisible(state)

  const onTabItemPress = (_routeName) => {
    navigation.navigate(_routeName, {
      prevRouteName: customRoutes[stateIndex]?.name
    })
  }

  const getIsFocus = (routeIndex, _routeName) =>
    state.routes[routeIndex].name === _routeName

  const renderTabItem = (route, index) => (
    <CustomTabItem
      key={index}
      route={customRoutes[index]}
      focus={getIsFocus(stateIndex, route.name)}
      routeName={route.name}
      onPress={onTabItemPress}
      colorTitle={colorTitle}
      {...MENU_CONFIG[route.name]}
    />
  )

  useEffect(() => {
    LayoutAnimation.linear()
  }, [isBottomTabs])

  return (
    isBottomTabs && (
      <View tabBarHideOnKeyboard={true} style={styles.shadowContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 1]}
          colors={['#4776e6', '#8e54e9']}
          style={styles.tabContainer}>
          {customRoutes.map(renderTabItem)}
        </LinearGradient>
      </View>
    )
  )
}

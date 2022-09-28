import { LayoutAnimation, View } from 'react-native'
import React, { useEffect } from 'react'

import CustomTabItem from './TabItem'
import LinearGradient from 'react-native-linear-gradient'
import { MENU_CONFIG } from '~/__constants__'
import { WINDOW_WIDTH } from '~/__constants__'
import dynamicStyles from './styles'
import { getIsBottomTabsVisible } from '~/helpers'

const StickyBottomTabs = (props) => {
  const { state, navigation, colorTitle } = props

  const styles = dynamicStyles({})
  const isBottomTabs = getIsBottomTabsVisible(state)
  const stateIndex = state.index
  const customRoutes = [...state.routes]
  const routesCount = customRoutes.length
  const tabWidth = WINDOW_WIDTH / routesCount

  const handleItemPress = (_routeName) => {
    const params = { prevRouteName: customRoutes[stateIndex]?.name }
    navigation.navigate(_routeName, params)
  }
  const getIsFocus = (routeIndex, _routeName) => {
    return state.routes[routeIndex].name === _routeName
  }

  const renderTabItem = (route, index) => (
    <CustomTabItem
      key={index}
      route={customRoutes[index]}
      focus={getIsFocus(stateIndex, route.name)}
      routeName={route.name}
      onPress={handleItemPress}
      colorTitle={colorTitle}
      tabWidth={tabWidth}
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
          colors={styles.gradient}
          style={styles.tabContainer}>
          {customRoutes.map(renderTabItem)}
        </LinearGradient>
      </View>
    )
  )
}

export default StickyBottomTabs

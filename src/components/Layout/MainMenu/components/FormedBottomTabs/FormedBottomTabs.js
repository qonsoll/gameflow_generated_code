import { MENU_CONFIG } from '~/__constants__'
import React from 'react'
import TabItem from './TabItem'
import { View } from 'react-native'
import dynamicStyles from './styles'

export default function FormedBottomTabs(props) {
  const { state, navigation, colorTitle } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  // [COMPUTED_PROPERTIES]
  const routes = [...state.routes]
  const indexToInsert = styles.addIndex ?? Math.floor(state.routes.length / 2)
  const customRoutes = [
    ...routes.slice(0, indexToInsert),
    { name: 'add' },
    ...routes.slice(indexToInsert)
  ]
  const stateIndex = state.index

  // [CLEAN_FUNCTIONS]
  const onAddPress = () => {}
  const onTabItemPress = (_routeName) => {
    const params = { prevRouteName: customRoutes[stateIndex]?.name }
    navigation.navigate(_routeName, params)
  }
  const getIsFocus = (routeIndex, routeName) => {
    return state.routes[routeIndex].name === routeName
  }

  const renderTabItem = (route, index) => (
    <TabItem
      key={index}
      isRightBorder={index === indexToInsert - 1}
      isLeftBorder={index === indexToInsert + 1}
      isAdd={index === indexToInsert}
      route={customRoutes[index]}
      focus={getIsFocus(stateIndex, route.name)}
      routeName={route.name}
      onPress={onTabItemPress}
      colorTitle={colorTitle}
      onAddPress={onAddPress}
      {...MENU_CONFIG[route.name]}
    />
  )

  return (
    <View style={styles.tabContainer}>{customRoutes.map(renderTabItem)}</View>
  )
}

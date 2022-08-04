import {
  DASHBOARD_NAVIGATOR,
  SETTINGS_NAVIGATOR,
  POST_NAVIGATOR
} from '../__constants__/navigators'
import React, { Suspense } from 'react'

import { CustomBottomTabs } from '../components'
import { DASHBOARD_SCREEN } from '../__constants__/screens'
import { DashboardScreen } from '../screens'
import { SettingsStackNavigator, PostStackNavigator } from '../navigators'
import { Spinner } from '@qonsoll/react-native-design'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import pluralize from 'pluralize'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          title: pluralize(route.name),
          headerShown: false
        })}
        tabBar={(props) => <CustomBottomTabs {...props} />}
        initialRouteName={DASHBOARD_NAVIGATOR}>
        <BottomTab.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
        <BottomTab.Screen
          name={POST_NAVIGATOR}
          component={PostStackNavigator}
        />
        <BottomTab.Screen
          name={SETTINGS_NAVIGATOR}
          component={SettingsStackNavigator}
        />
      </BottomTab.Navigator>
    </Suspense>
  )
}

export default BottomTabNavigator

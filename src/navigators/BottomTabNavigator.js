import React, { Suspense } from 'react'

import { DASHBOARD_SCREEN } from '../__constants__/screens'
import { DashboardScreen } from '../screens'
import { MainMenu } from '../components'
import { SETTINGS_NAVIGATOR } from '../__constants__/navigators'
import { SettingsStackNavigator } from '../navigators'
import { Spinner } from 'native-base'
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
        tabBar={(props) => <MainMenu {...props} variant="sticky" />}
        initialRouteName={DASHBOARD_SCREEN}>
        <BottomTab.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
        <BottomTab.Screen
          name={SETTINGS_NAVIGATOR}
          component={SettingsStackNavigator}
        />
      </BottomTab.Navigator>
    </Suspense>
  )
}

export default BottomTabNavigator

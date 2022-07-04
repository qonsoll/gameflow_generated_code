import { PROFILE_SCREEN, SETTINGS_SCREEN } from '../constants/screens'
import { ProfileScreen, SettingsScreen } from '../screens'

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator

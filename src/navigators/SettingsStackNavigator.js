import {
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
  LANGUAGES_ALL
} from '~/__constants__/screens'
import { ProfileScreen, SettingsScreen } from '~/screens'

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LanguagesAll } from '~/screens/Language'

const Stack = createStackNavigator()

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Stack.Screen name={LANGUAGES_ALL} component={LanguagesAll} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator

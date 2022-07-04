import { BOTTOM_TAB_NAVIGATOR } from '../constants/navigators'
import { BottomTabNavigator } from '../navigators'
import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useStatusBarColor } from '../hooks'

const Stack = createStackNavigator()

const AppStackNavigator = () => {
  const [statusBarColor] = useStatusBarColor()

  if (statusBarColor) {
    StatusBar.setBarStyle(statusBarColor, true)
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

export default AppStackNavigator

import { BOTTOM_TAB_NAVIGATOR } from '../constants/navigators'
import BottomTabNavigator from './BottomTabNavigator'
import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { isIOS } from '../constants'
import theme from '../../theme'
import { useStatusBarColor } from '../hooks'

const Stack = createStackNavigator()

const AppStackNavigator = () => {
  const [statusBarColor] = useStatusBarColor()

  if (statusBarColor) {
    isIOS
      ? StatusBar.setBarStyle(statusBarColor, true)
      : StatusBar.setBackgroundColor(theme.CORE.COLORS['primary-default'], true)
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

export default AppStackNavigator

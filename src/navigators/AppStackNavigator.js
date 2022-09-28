import { BOTTOM_TAB_NAVIGATOR } from '../__constants__/navigators'
import BottomTabNavigator from './BottomTabNavigator'
import { IMAGE_UPLOAD_SCREEN } from '../__constants__/screens'
import ImageUploadScreen from '../screens/ImageUpload'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useStatusBarColor } from '../hooks'

const Stack = createStackNavigator()

const AppStackNavigator = () => {
  /* A hook that controls the status bar color and bg on android for different screens. */
  useStatusBarColor()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={IMAGE_UPLOAD_SCREEN} component={ImageUploadScreen} />
    </Stack.Navigator>
  )
}

export default AppStackNavigator

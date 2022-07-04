import { useOnboarding, useStatusBarColor } from '../hooks'

import { ONBOARDING_NAVIGATOR } from '../constants/navigators'
import OnboardingStackNavigator from './OnboardingStackNavigator'
import React from 'react'
import { SIGN_IN_SCREEN } from '../constants/screens'
import { SignInScreen } from '../screens'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
  const [isOnboardingShoved] = useOnboarding()
  const [statusBarColor] = useStatusBarColor()

  if (statusBarColor) {
    StatusBar.setBarStyle(statusBarColor, true)
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {(!isOnboardingShoved || isOnboardingShoved !== 'true') && (
        <Stack.Screen
          name={ONBOARDING_NAVIGATOR}
          component={OnboardingStackNavigator}
        />
      )}
      <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

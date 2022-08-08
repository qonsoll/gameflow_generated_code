import {
  ONBOARDING_FIRST_SCREEN,
  ONBOARDING_SECOND_SCREEN,
  ONBOARDING_THIRD_SCREEN
} from '../__constants__/screens'
import {
  OnboardingFirstScreen,
  OnboardingSecondScreen,
  OnboardingThirdScreen
} from '../screens'

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name={ONBOARDING_FIRST_SCREEN}
        component={OnboardingFirstScreen}
      />
      <Stack.Screen
        name={ONBOARDING_SECOND_SCREEN}
        component={OnboardingSecondScreen}
      />
      <Stack.Screen
        name={ONBOARDING_THIRD_SCREEN}
        component={OnboardingThirdScreen}
      />
    </Stack.Navigator>
  )
}

export default OnboardingStackNavigator

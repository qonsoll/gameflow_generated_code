import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_WITH_EMAIL_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_WITH_EMAIL_SCREEN
} from '../__constants__/screens'
import {
  ForgotPasswordScreen,
  LoginWithEmailScreen,
  SignInScreen,
  SignUpWithEmailScreen
} from '../screens'
import { useOnboarding, useStatusBarColor } from '../hooks'

import { ONBOARDING_NAVIGATOR } from '../__constants__/navigators'
import OnboardingStackNavigator from './OnboardingStackNavigator'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
  const [isOnboardingShoved] = useOnboarding()
  /* A hook that controls the status bar color and bg on android for different screens. */
  useStatusBarColor()

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
      <Stack.Screen
        name={SIGN_UP_WITH_EMAIL_SCREEN}
        component={SignUpWithEmailScreen}
      />
      <Stack.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={LOGIN_WITH_EMAIL_SCREEN}
        component={LoginWithEmailScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

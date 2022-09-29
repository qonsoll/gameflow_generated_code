import React, { Suspense } from 'react'

import { LANGUAGES_ALL_SCREEN } from '../__constants__/screens'
import { LanguagesAll } from '../screens/Language'
import { Spinner } from '@qonsoll/react-native-design'
import { createStackNavigator } from '@react-navigation/stack'

const Language = createStackNavigator()

const LanguageStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Language.Navigator
        initialRouteName={LANGUAGES_ALL_SCREEN}
        screenOptions={{
          headerShown: false
        }}>
        <Language.Screen name={LANGUAGES_ALL_SCREEN} component={LanguagesAll} />
      </Language.Navigator>
    </Suspense>
  )
}

export default LanguageStackNavigator

import { LanguagesAll } from '../screens/Language'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from '@qonsoll/react-native-design'

const Language = createStackNavigator()

const LanguageStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Language.Navigator
        initialRouteName="LANGUAGES_ALL"
        screenOptions={{
          headerShown: false
        }}>
        <Language.Screen name="LANGUAGES_ALL" component={LanguagesAll} />
      </Language.Navigator>
    </Suspense>
  )
}

export default LanguageStackNavigator

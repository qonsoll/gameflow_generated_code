import { CompetitionShowStackNavigator } from './'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from 'native-base'
import { COMPETITION_SHOW_NAVIGATOR } from '~/__constants__/navigators'

const Competition = createStackNavigator()

const CompetitionStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Competition.Navigator
        initialRouteName={COMPETITION_SHOW_NAVIGATOR}
        screenOptions={{
          headerShown: false
        }}>
        <Competition.Screen
          name={COMPETITION_SHOW_NAVIGATOR}
          component={CompetitionShowStackNavigator}
        />
      </Competition.Navigator>
    </Suspense>
  )
}

export default CompetitionStackNavigator

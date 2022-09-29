import { MatchShowStackNavigator } from './'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from 'native-base'
import { MATCH_SHOW_NAVIGATOR } from '~/__constants__/navigators'

const Match = createStackNavigator()

const MatchStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Match.Navigator
        initialRouteName={MATCH_SHOW_NAVIGATOR}
        screenOptions={{
          headerShown: false
        }}>
        <Match.Screen
          name={MATCH_SHOW_NAVIGATOR}
          component={MatchShowStackNavigator}
        />
      </Match.Navigator>
    </Suspense>
  )
}

export default MatchStackNavigator

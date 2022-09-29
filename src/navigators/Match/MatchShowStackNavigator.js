import {
  MatchesAll,
  MatchFilter,
  MatchShow,
  MatchTeamsShow
} from '../../screens/Match'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from 'native-base'
import {
  MATCHES_ALL_SCREEN,
  MATCH_FILTER_SCREEN,
  MATCH_SHOW_SCREEN,
  MATCH_TEAMS_SHOW_SCREEN
} from '~/__constants__/screens'

const Match = createStackNavigator()

const MatchShowStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Match.Navigator
        initialRouteName={MATCHES_ALL_SCREEN}
        screenOptions={{
          headerShown: false
        }}>
        <Match.Screen name={MATCHES_ALL_SCREEN} component={MatchesAll} />
        <Match.Screen name={MATCH_FILTER_SCREEN} component={MatchFilter} />
        <Match.Screen name={MATCH_SHOW_SCREEN} component={MatchShow} />
        <Match.Screen
          name={MATCH_TEAMS_SHOW_SCREEN}
          component={MatchTeamsShow}
        />
      </Match.Navigator>
    </Suspense>
  )
}

export default MatchShowStackNavigator

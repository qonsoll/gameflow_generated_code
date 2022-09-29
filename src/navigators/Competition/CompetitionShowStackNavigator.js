import {
  CompetitionsAll,
  CompetitionFilter,
  CompetitionShow,
  CompetitionTeamsShow,
  CompetitionMatchesShow,
  CompetitionVideoGameShow
} from '../../screens/Competition'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from 'native-base'
import {
  COMPETITIONS_ALL_SCREEN,
  COMPETITION_FILTER_SCREEN,
  COMPETITION_SHOW_SCREEN,
  COMPETITION_TEAMS_SHOW_SCREEN,
  COMPETITION_MATCHES_SHOW_SCREEN,
  COMPETITION_VIDEO_GAME_SHOW_SCREEN
} from '~/__constants__/screens'

const Competition = createStackNavigator()

const CompetitionShowStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Competition.Navigator
        initialRouteName={COMPETITIONS_ALL_SCREEN}
        screenOptions={{
          headerShown: false
        }}>
        <Competition.Screen
          name={COMPETITIONS_ALL_SCREEN}
          component={CompetitionsAll}
        />
        <Competition.Screen
          name={COMPETITION_FILTER_SCREEN}
          component={CompetitionFilter}
        />
        <Competition.Screen
          name={COMPETITION_SHOW_SCREEN}
          component={CompetitionShow}
        />
        <Competition.Screen
          name={COMPETITION_TEAMS_SHOW_SCREEN}
          component={CompetitionTeamsShow}
        />
        <Competition.Screen
          name={COMPETITION_MATCHES_SHOW_SCREEN}
          component={CompetitionMatchesShow}
        />
        <Competition.Screen
          name={COMPETITION_VIDEO_GAME_SHOW_SCREEN}
          component={CompetitionVideoGameShow}
        />
      </Competition.Navigator>
    </Suspense>
  )
}

export default CompetitionShowStackNavigator

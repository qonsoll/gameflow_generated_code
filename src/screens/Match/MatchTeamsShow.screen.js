import React from 'react'
import { PageWrapper } from '~/components'
import { TeamList } from '~/domains/Team/components'
import { useNavigation } from '@react-navigation/native'
import { useGetMatchTeams } from '~/domains/Match/hooks'
import { useListenMatch } from '~/domains/Match/hooks'

const MatchTeamsShow = (props) => {
  const { route } = props
  const matchId = route.params?.match._id

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()
  const [match] = useListenMatch(matchId)
  const [teams, loading] = useGetMatchTeams(match)

  // [COMPUTED_PROPERTIES]
  const goBack = () => navigation.goBack()

  return (
    <PageWrapper
      title="Match teams show"
      leftButtonText="Back"
      leftButtonAction={goBack}>
      <TeamList loading={loading} teams={teams} />
    </PageWrapper>
  )
}

export default MatchTeamsShow

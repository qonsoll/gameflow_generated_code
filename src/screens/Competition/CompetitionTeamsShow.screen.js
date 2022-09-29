import React from 'react'
import { PageWrapper } from '~/components'
import { TeamList } from '~/domains/Team/components'
import { useNavigation } from '@react-navigation/native'
import { useGetCompetitionTeams } from '~/domains/Competition/hooks'
import { useListenCompetition } from '~/domains/Competition/hooks'

const CompetitionTeamsShow = (props) => {
  const { route } = props
  const competitionId = route.params?.competition._id

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()
  const [competition] = useListenCompetition(competitionId)
  const [participants, loading] = useGetCompetitionTeams(competition)

  // [COMPUTED_PROPERTIES]
  const goBack = () => navigation.goBack()

  return (
    <PageWrapper
      title="Competition teams show"
      leftButtonText="Back"
      leftButtonAction={goBack}>
      <TeamList loading={loading} participants={participants} />
    </PageWrapper>
  )
}

export default CompetitionTeamsShow

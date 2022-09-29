import React from 'react'
import { PageWrapper } from '~/components'
import { MatchList } from '~/domains/Match/components'
import { useNavigation } from '@react-navigation/native'
import { useGetCompetitionMatches } from '~/domains/Competition/hooks'
import { useListenCompetition } from '~/domains/Competition/hooks'

const CompetitionMatchesShow = (props) => {
  const { route } = props
  const competitionId = route.params?.competition._id

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()
  const [competition] = useListenCompetition(competitionId)
  const [matches, loading] = useGetCompetitionMatches(competition)

  // [COMPUTED_PROPERTIES]
  const goBack = () => navigation.goBack()

  return (
    <PageWrapper
      title="Competition matches show"
      leftButtonText="Back"
      leftButtonAction={goBack}>
      <MatchList loading={loading} matches={matches} />
    </PageWrapper>
  )
}

export default CompetitionMatchesShow

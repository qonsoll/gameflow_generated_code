import React from 'react'
import { PageWrapper } from '~/components'
import { VideoGameAdvancedView } from '~/domains/VideoGame/components'
import { useNavigation } from '@react-navigation/native'
import { useGetCompetitionVideoGame } from '~/domains/Competition/hooks'
import { useListenCompetition } from '~/domains/Competition/hooks'

const CompetitionVideoGameShow = (props) => {
  const { route } = props
  const competitionId = route.params?.competition._id

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()
  const [competition] = useListenCompetition(competitionId)
  const [videoGame, loading] = useGetCompetitionVideoGame(competition)

  // [COMPUTED_PROPERTIES]
  const goBack = () => navigation.goBack()

  return (
    <PageWrapper
      title="Competition video game show"
      leftButtonText="Back"
      leftButtonAction={goBack}>
      <VideoGameAdvancedView loading={loading} videoGame={videoGame} />
    </PageWrapper>
  )
}

export default CompetitionVideoGameShow

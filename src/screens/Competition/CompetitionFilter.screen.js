import React from 'react'
import { PageWrapper } from '~/components'
import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Select } from 'native-base'
import { theme } from '~/styles'
import { useTranslations } from '@qonsoll/translation'
import { useGetTeams } from '~/domains/Team/hooks'
import { useGetMatches } from '~/domains/Match/hooks'
import { useGetVideoGames } from '~/domains/VideoGame/hooks'

const CompetitionFilter = (props) => {
  const navigation = useNavigation()
  const { filterData, setFilterData } = props.route.params
  const { t } = useTranslations()
  const [teams] = useGetTeams()
  const [matches] = useGetMatches()
  const [videoGames] = useGetVideoGames()

  const onFilterChange = (optionKey, optionCondition, value) => {
    const existingValue = filterData?.where?.findIndex((item) => {
      const [key] = item
      return key === optionKey
    })
    if (existingValue !== -1 && existingValue !== undefined) {
      const filterDataCopy = { ...filterData }
      filterDataCopy.where[existingValue] = [optionKey, optionCondition, value]
      setFilterData({ ...filterDataCopy })
    } else {
      setFilterData((prev) => ({
        ...prev,
        where: [[optionKey, optionCondition, value]]
      }))
    }
  }

  return (
    <PageWrapper
      leftButtonText={t('Back')}
      leftButtonAction={() => navigation.goBack()}
      rightButtonText={t('Clear')}
      rightButtonAction={() => {
        setFilterData({})
        navigation.goBack()
      }}
      title={t('Competition filter')}>
      <Container>
        <Heading mb={4} size="md">
          Participants
        </Heading>
        <Box width="100%">
          <Select
            defaultValue={() => {
              const foundedField = filterData?.where?.find((condition) => {
                const [key] = condition
                return key === 'participants'
              })
              const [key, condition, value] = foundedField || []
              return value
            }}
            onValueChange={(value) =>
              onFilterChange('participants', 'array-contains', value)
            }
            color={theme.COMPONENTS.Typography.color}
            placeholder={t('Please, select the participants')}>
            {teams.map((team) => (
              <Select.Item key={team._id} label={team.name} value={team._id} />
            ))}
          </Select>
        </Box>
        <Heading mb={4} size="md">
          Matches
        </Heading>
        <Box width="100%">
          <Select
            defaultValue={() => {
              const foundedField = filterData?.where?.find((condition) => {
                const [key] = condition
                return key === 'matches'
              })
              const [key, condition, value] = foundedField || []
              return value
            }}
            onValueChange={(value) =>
              onFilterChange('matches', 'array-contains', value)
            }
            color={theme.COMPONENTS.Typography.color}
            placeholder={t('Please, select the matches')}>
            {matches.map((match) => (
              <Select.Item
                key={match._id}
                label={match.name}
                value={match._id}
              />
            ))}
          </Select>
        </Box>
        <Heading mb={4} size="md">
          Video game
        </Heading>
        <Box width="100%">
          <Select
            defaultValue={() => {
              const foundedField = filterData?.where?.find((condition) => {
                const [key] = condition
                return key === 'videoGame'
              })
              const [key, condition, value] = foundedField || []
              return value
            }}
            onValueChange={(value) =>
              onFilterChange('videoGame', '&#x3D;&#x3D;', value)
            }
            color={theme.COMPONENTS.Typography.color}
            placeholder={t('Please, select the video game')}>
            {videoGames.map((videoGame) => (
              <Select.Item
                key={videoGame._id}
                label={videoGame.name}
                value={videoGame._id}
              />
            ))}
          </Select>
        </Box>
      </Container>
    </PageWrapper>
  )
}

export default CompetitionFilter

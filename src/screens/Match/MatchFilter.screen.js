import React from 'react'
import { PageWrapper } from '~/components'
import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Select } from 'native-base'
import { theme } from '~/styles'
import { useTranslations } from '@qonsoll/translation'
import { useGetTeams } from '~/domains/Team/hooks'

const MatchFilter = (props) => {
  const navigation = useNavigation()
  const { filterData, setFilterData } = props.route.params
  const { t } = useTranslations()
  const [teams] = useGetTeams()

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
      title={t('Match filter')}>
      <Container>
        <Heading mb={4} size="md">
          Teams
        </Heading>
        <Box width="100%">
          <Select
            defaultValue={() => {
              const foundedField = filterData?.where?.find((condition) => {
                const [key] = condition
                return key === 'teams'
              })
              const [key, condition, value] = foundedField || []
              return value
            }}
            onValueChange={(value) =>
              onFilterChange('teams', 'array-contains', value)
            }
            color={theme.COMPONENTS.Typography.color}
            placeholder={t('Please, select the teams')}>
            {teams.map((team) => (
              <Select.Item key={team._id} label={team.name} value={team._id} />
            ))}
          </Select>
        </Box>
      </Container>
    </PageWrapper>
  )
}

export default MatchFilter

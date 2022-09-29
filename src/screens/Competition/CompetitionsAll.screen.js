import React from 'react'
import { PageWrapper } from '~/components'
import { CompetitionList } from '~/domains/Competition/components'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { useGetCompetitions } from '~/domains/Competition/hooks'
import { useState } from 'react'
import { Container } from 'native-base'
import { Input } from '~/components/Form'
import { COMPETITION_FORM_NAVIGATOR } from '~/__constants__/navigators'
import { COMPETITION_CREATE_SCREEN } from '~/__constants__/screens'
import { COMPETITION_FILTER_SCREEN } from '~/__constants__/screens'

const CompetitionsAll = (props) => {
  // [COMPONENT_STATE_HOOKS]
  const [filterData, setFilterData] = useState({})

  // [ADDITIONAL_HOOKS]
  const [competitions, loading] = useGetCompetitions(filterData)
  const navigation = useNavigation()

  return (
    <PageWrapper
      title="Competitions"
      rightButtonText="Add new"
      rightButtonAction={() =>
        navigation.navigate(COMPETITION_FORM_NAVIGATOR, {
          screen: COMPETITION_CREATE_SCREEN
        })
      }>
      <Container mb={8}>
        <Input
          placeholder="Enter for search"
          rightIcon="filter-alt"
          onRightIconPress={() =>
            navigation.navigate(COMPETITION_FILTER_SCREEN, {
              filterData,
              setFilterData
            })
          }
        />
      </Container>
      <CompetitionList competitions={competitions} loading={loading} />
    </PageWrapper>
  )
}

CompetitionsAll.propTypes = {}

export default CompetitionsAll

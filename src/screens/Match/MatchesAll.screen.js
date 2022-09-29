import React from 'react'
import { PageWrapper } from '~/components'
import { MatchList } from '~/domains/Match/components'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { useGetMatches } from '~/domains/Match/hooks'
import { useState } from 'react'
import { Container } from 'native-base'
import { Input } from '~/components/Form'
import { MATCH_FORM_NAVIGATOR } from '~/__constants__/navigators'
import { MATCH_CREATE_SCREEN } from '~/__constants__/screens'
import { MATCH_FILTER_SCREEN } from '~/__constants__/screens'

const MatchesAll = (props) => {
  // [COMPONENT_STATE_HOOKS]
  const [filterData, setFilterData] = useState({})

  // [ADDITIONAL_HOOKS]
  const [matches, loading] = useGetMatches(filterData)
  const navigation = useNavigation()

  return (
    <PageWrapper
      title="Matches"
      rightButtonText="Add new"
      rightButtonAction={() =>
        navigation.navigate(MATCH_FORM_NAVIGATOR, {
          screen: MATCH_CREATE_SCREEN
        })
      }>
      <Container mb={8}>
        <Input
          placeholder="Enter for search"
          rightIcon="filter-alt"
          onRightIconPress={() =>
            navigation.navigate(MATCH_FILTER_SCREEN, {
              filterData,
              setFilterData
            })
          }
        />
      </Container>
      <MatchList matches={matches} loading={loading} />
    </PageWrapper>
  )
}

MatchesAll.propTypes = {}

export default MatchesAll

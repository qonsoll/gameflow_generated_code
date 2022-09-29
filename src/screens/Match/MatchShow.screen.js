import React from 'react'
import { PageWrapper } from '~/components'
import { MatchAdvancedView } from '~/domains/Match/components'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

const MatchShow = (props) => {
  const { route } = props

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [COMPUTED_PROPERTIES]
  const { match } = route.params

  return (
    <PageWrapper
      title="Match"
      isContentScrollable
      leftButtonText="Back"
      leftButtonAction={() => navigation.goBack()}>
      <MatchAdvancedView match={match} />
    </PageWrapper>
  )
}

MatchShow.propTypes = {
  route: PropTypes.object
}

export default MatchShow

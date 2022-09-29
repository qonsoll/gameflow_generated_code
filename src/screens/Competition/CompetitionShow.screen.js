import React from 'react'
import { PageWrapper } from '~/components'
import { CompetitionAdvancedView } from '~/domains/Competition/components'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

const CompetitionShow = (props) => {
  const { route } = props

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [COMPUTED_PROPERTIES]
  const { competition } = route.params

  return (
    <PageWrapper
      title="Competition"
      isContentScrollable
      leftButtonText="Back"
      leftButtonAction={() => navigation.goBack()}>
      <CompetitionAdvancedView competition={competition} />
    </PageWrapper>
  )
}

CompetitionShow.propTypes = {
  route: PropTypes.object
}

export default CompetitionShow

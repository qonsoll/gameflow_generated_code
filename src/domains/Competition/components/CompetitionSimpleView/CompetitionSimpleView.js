import React from 'react'
import dynamicStyles from './CompetitionSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import {
  COMPETITION_NAVIGATOR,
  COMPETITION_FORM_NAVIGATOR,
  COMPETITION_SHOW_NAVIGATOR
} from '~/__constants__/navigators'
import {
  COMPETITION_EDIT_SCREEN,
  COMPETITION_SHOW_SCREEN
} from '~/__constants__/screens'
import { COLLECTIONS } from '~/__constants__'
import { TouchableOpacity } from 'react-native'
import { SwipeableCard } from '~/components'
import { Divider, Title, Text } from 'native-base'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { SimpleViewLayout, SimpleViewLayoutSecondary } from '~/components'
import { deleteDocument } from '~/services/firestore'

const CompetitionSimpleView = (props) => {
  const { competition, isLast } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  /*  */
  const creationDateFormatted = moment(competition?._createdAt).format(
    'DD-MM-YYYY'
  )

  /*  */
  const onEdit = () =>
    navigation.navigate(COMPETITION_NAVIGATOR, {
      screen: COMPETITION_FORM_NAVIGATOR,
      params: { screen: COMPETITION_EDIT_SCREEN, params: { competition } }
    })

  /*  */
  const onShow = () =>
    navigation.navigate(COMPETITION_NAVIGATOR, {
      screen: COMPETITION_SHOW_NAVIGATOR,
      params: { screen: COMPETITION_SHOW_SCREEN, params: { competition } }
    })

  /*  */
  const onRemove = () =>
    deleteDocument(COLLECTIONS.COMPETITION, competition._id)

  return (
    <SwipeableCard
      onPress={onShow}
      onRemove={onRemove}
      onEdit={onEdit}
      activeOpacity={0.2}>
      <SimpleViewLayout
        date={creationDateFormatted}
        title={competition?.title}
        description={competition?.description}
      />
    </SwipeableCard>
  )
}

CompetitionSimpleView.propTypes = {
  competition: PropTypes.object.isRequired,
  isLast: PropTypes.bool
}

export default CompetitionSimpleView

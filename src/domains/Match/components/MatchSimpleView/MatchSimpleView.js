import React from 'react'
import dynamicStyles from './MatchSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import {
  MATCH_NAVIGATOR,
  MATCH_FORM_NAVIGATOR,
  MATCH_SHOW_NAVIGATOR
} from '~/__constants__/navigators'
import { MATCH_EDIT_SCREEN, MATCH_SHOW_SCREEN } from '~/__constants__/screens'
import { COLLECTIONS } from '~/__constants__'
import { TouchableOpacity } from 'react-native'
import { SwipeableCard } from '~/components'
import { Divider, Text, Link } from 'native-base'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { SimpleViewLayout, SimpleViewLayoutSecondary } from '~/components'
import { deleteDocument } from '~/services/firestore'

const MatchSimpleView = (props) => {
  const { match, isLast } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  /*  */
  const creationDateFormatted = moment(match?._createdAt).format('DD-MM-YYYY')

  /*  */
  const onEdit = () =>
    navigation.navigate(MATCH_NAVIGATOR, {
      screen: MATCH_FORM_NAVIGATOR,
      params: { screen: MATCH_EDIT_SCREEN, params: { match } }
    })

  /*  */
  const onShow = () =>
    navigation.navigate(MATCH_NAVIGATOR, {
      screen: MATCH_SHOW_NAVIGATOR,
      params: { screen: MATCH_SHOW_SCREEN, params: { match } }
    })

  /*  */
  const onRemove = () => deleteDocument(COLLECTIONS.MATCH, match._id)

  return (
    <SwipeableCard
      onPress={onShow}
      onRemove={onRemove}
      onEdit={onEdit}
      activeOpacity={0.2}>
      <SimpleViewLayout
        date={creationDateFormatted}
        title={t('Match')}
        description={match?.description}
      />
    </SwipeableCard>
  )
}

MatchSimpleView.propTypes = {
  match: PropTypes.object.isRequired,
  isLast: PropTypes.bool
}

export default MatchSimpleView

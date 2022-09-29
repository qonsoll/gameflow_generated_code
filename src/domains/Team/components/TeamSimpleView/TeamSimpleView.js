import React from 'react'
import dynamicStyles from './TeamSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import {
  TEAM_NAVIGATOR,
  TEAM_FORM_NAVIGATOR,
  TEAM_SHOW_NAVIGATOR
} from '~/__constants__/navigators'
import { TEAM_EDIT_SCREEN, TEAM_SHOW_SCREEN } from '~/__constants__/screens'
import { COLLECTIONS } from '~/__constants__'
import { TouchableOpacity } from 'react-native'
import { SwipeableCard } from '~/components'
import { Divider, Title, Image, Text } from 'native-base'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { SimpleViewLayout, SimpleViewLayoutSecondary } from '~/components'
import { deleteDocument } from '~/services/firestore'

const TeamSimpleView = (props) => {
  const { team, isLast } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  /*  */
  const creationDateFormatted = moment(team?._createdAt).format('DD-MM-YYYY')

  /*  */
  const onEdit = () =>
    navigation.navigate(TEAM_NAVIGATOR, {
      screen: TEAM_FORM_NAVIGATOR,
      params: { screen: TEAM_EDIT_SCREEN, params: { team } }
    })

  /*  */
  const onShow = () =>
    navigation.navigate(TEAM_NAVIGATOR, {
      screen: TEAM_SHOW_NAVIGATOR,
      params: { screen: TEAM_SHOW_SCREEN, params: { team } }
    })

  /*  */
  const onRemove = () => deleteDocument(COLLECTIONS.TEAM, team._id)

  return (
    <TouchableOpacity
      onPress={onShow}
      onRemove={onRemove}
      onEdit={onEdit}
      activeOpacity={0.2}>
      <SimpleViewLayoutSecondary
        isLast={isLast}
        date={creationDateFormatted}
        title={team?.name}
        imageUri={team?.logoUrl}
        description={team?.description}
      />
    </TouchableOpacity>
  )
}

TeamSimpleView.propTypes = {
  team: PropTypes.object.isRequired,
  isLast: PropTypes.bool
}

export default TeamSimpleView

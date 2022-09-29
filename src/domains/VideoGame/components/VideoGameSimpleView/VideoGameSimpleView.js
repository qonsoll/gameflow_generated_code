import React from 'react'
import dynamicStyles from './VideoGameSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import {
  VIDEO_GAME_NAVIGATOR,
  VIDEO_GAME_FORM_NAVIGATOR,
  VIDEO_GAME_SHOW_NAVIGATOR
} from '~/__constants__/navigators'
import {
  VIDEO_GAME_EDIT_SCREEN,
  VIDEO_GAME_SHOW_SCREEN
} from '~/__constants__/screens'
import { COLLECTIONS } from '~/__constants__'
import { TouchableOpacity } from 'react-native'
import { SwipeableCard } from '~/components'
import { Divider, Title, Text, Image } from 'native-base'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { SimpleViewLayout, SimpleViewLayoutSecondary } from '~/components'
import { deleteDocument } from '~/services/firestore'

const VideoGameSimpleView = (props) => {
  const { videoGame, isLast } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  /*  */
  const creationDateFormatted = moment(videoGame?._createdAt).format(
    'DD-MM-YYYY'
  )

  /*  */
  const onEdit = () =>
    navigation.navigate(VIDEO_GAME_NAVIGATOR, {
      screen: VIDEO_GAME_FORM_NAVIGATOR,
      params: { screen: VIDEO_GAME_EDIT_SCREEN, params: { videoGame } }
    })

  /*  */
  const onShow = () =>
    navigation.navigate(VIDEO_GAME_NAVIGATOR, {
      screen: VIDEO_GAME_SHOW_NAVIGATOR,
      params: { screen: VIDEO_GAME_SHOW_SCREEN, params: { videoGame } }
    })

  /*  */
  const onRemove = () => deleteDocument(COLLECTIONS.VIDEO_GAME, videoGame._id)

  return (
    <TouchableOpacity
      onPress={onShow}
      onRemove={onRemove}
      onEdit={onEdit}
      activeOpacity={0.2}>
      <SimpleViewLayoutSecondary
        isLast={isLast}
        date={creationDateFormatted}
        title={videoGame?.name}
        imageUri={videoGame?.logoUrl}
        description={videoGame?.description}
      />
    </TouchableOpacity>
  )
}

VideoGameSimpleView.propTypes = {
  videoGame: PropTypes.object.isRequired,
  isLast: PropTypes.bool
}

export default VideoGameSimpleView

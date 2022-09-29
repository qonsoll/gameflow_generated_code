import React from 'react'
import dynamicStyles from './VideoGameList.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { FlatList, View } from 'react-native'
import { VideoGameSimpleView } from '~/domains/VideoGame/components'
import { Loading, Empty } from '~/components'
import { Divider } from 'native-base'

const VideoGameList = (props) => {
  const { videoGames, loading, hideButton } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <Loading text={t('Video games are loading')} />
      ) : videoGames?.length > 0 ? (
        <>
          <FlatList
            data={videoGames}
            renderItem={({ item, index }) => (
              <>
                <VideoGameSimpleView
                  isLast={videoGames?.length - 1 === index}
                  videoGame={item}
                />
              </>
            )}
          />
        </>
      ) : (
        <Empty hideButton={hideButton} message="There are no video games yet" />
      )}
    </View>
  )
}

VideoGameList.propTypes = {
  videoGames: PropTypes.array,
  loading: PropTypes.bool,
  hideButton: PropTypes.bool
}

export default VideoGameList

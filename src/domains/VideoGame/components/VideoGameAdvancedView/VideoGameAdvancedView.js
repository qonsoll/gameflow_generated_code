import React from 'react'
import dynamicStyles from './VideoGameAdvancedView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'
import { MenuList } from '~/components'
import { useAdvancedViewItems } from './hooks'
import { Text, HStack, Container, Heading, Image } from 'native-base'
import moment from 'moment'

const VideoGameAdvancedView = (props) => {
  const { videoGame } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting items from useAdvancedViewItems hook */
  const items = useAdvancedViewItems({ videoGame })

  return (
    <Container>
      <View style={styles.wrapper}>
        <View style={[styles.container, styles.cardWrapper]}>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Image style={styles.image} source={{ uri: videoGame?.logoUrl }} />
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Image
              style={styles.image}
              source={{ uri: videoGame?.shortLogoUrl }}
            />
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Image style={styles.image} source={{ uri: videoGame?.bgImage }} />
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Heading>{videoGame?.name}</Heading>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Release date')}</Text>
            <Text>{moment(videoGame?.releaseDate).format('DD-MM-YYYY')}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Publisher')}</Text>
            <Text>{videoGame?.publisher}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Genre')}</Text>
            <Text>{videoGame?.genre}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Slug')}</Text>
            <Text>{videoGame?.slug}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Color')}</Text>
            <Text>{videoGame?.color}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Bg color')}</Text>
            <Text>{videoGame?.bgColor}</Text>
          </HStack>
        </View>
      </View>
    </Container>
  )
}

VideoGameAdvancedView.propTypes = {
  videoGame: PropTypes.object.isRequired
}

export default VideoGameAdvancedView

import React from 'react'
import dynamicStyles from './MatchAdvancedView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'
import { MenuList } from '~/components'
import { useAdvancedViewItems } from './hooks'
import { Text, HStack, Container, Heading, Link } from 'native-base'
import moment from 'moment'

const MatchAdvancedView = (props) => {
  const { match } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting items from useAdvancedViewItems hook */
  const items = useAdvancedViewItems({ match })

  return (
    <Container>
      <View style={styles.wrapper}>
        <View style={[styles.container, styles.cardWrapper]}>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Start date')}</Text>
            <Text>{match?.startDate}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Stream url')}</Text>
            <Link>{match?.streamUrl}</Link>
          </HStack>
        </View>
        {items?.length && (
          <View>
            <Text
              variant="caption1"
              color="text-caption-color"
              style={styles.description}>
              {t('ADDITIONAL DATA')}
            </Text>
            <View style={styles.container}>
              <MenuList data={items} />
            </View>
          </View>
        )}
      </View>
    </Container>
  )
}

MatchAdvancedView.propTypes = {
  match: PropTypes.object.isRequired
}

export default MatchAdvancedView

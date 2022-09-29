import React from 'react'
import dynamicStyles from './CompetitionAdvancedView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'
import { MenuList } from '~/components'
import { useAdvancedViewItems } from './hooks'
import { Text, HStack, Container, Heading } from 'native-base'
import moment from 'moment'
import { SEASONS, TIERS } from '~/__constants__/enums'

const CompetitionAdvancedView = (props) => {
  const { competition } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting items from useAdvancedViewItems hook */
  const items = useAdvancedViewItems({ competition })

  return (
    <Container>
      <View style={styles.wrapper}>
        <View style={[styles.container, styles.cardWrapper]}>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Heading>{competition?.title}</Heading>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Start date')}</Text>
            <Text>{moment(competition?.startDate).format('DD-MM-YYYY')}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('End date')}</Text>
            <Text>{moment(competition?.endDate).format('DD-MM-YYYY')}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="gray.500">{competition?.description}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Prize')}</Text>
            <Text>{competition?.prize}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Region')}</Text>
            <Text>{competition?.region}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Color')}</Text>
            <Text>{competition?.color}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Season')}</Text>
            <Text>{SEASONS[competition?.season] || t('None')}</Text>
          </HStack>
          <HStack justifyContent="space-between" flexWrap="wrap" mb={2}>
            <Text color="text-caption-color">{t('Tier')}</Text>
            <Text>{TIERS[competition?.tier] || t('None')}</Text>
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

CompetitionAdvancedView.propTypes = {
  competition: PropTypes.object.isRequired
}

export default CompetitionAdvancedView

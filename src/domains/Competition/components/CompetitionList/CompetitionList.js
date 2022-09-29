import React from 'react'
import dynamicStyles from './CompetitionList.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { FlatList, View } from 'react-native'
import { CompetitionSimpleView } from '~/domains/Competition/components'
import { Loading, Empty } from '~/components'
import { Divider } from 'native-base'

const CompetitionList = (props) => {
  const { competitions, loading, hideButton } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <Loading text={t('Competitions are loading')} />
      ) : competitions?.length > 0 ? (
        <>
          <Divider ml={styles.divider.margin} />
          <FlatList
            data={competitions}
            renderItem={({ item, index }) => (
              <>
                <CompetitionSimpleView
                  isLast={competitions?.length - 1 === index}
                  competition={item}
                />
                <Divider ml={styles.divider.margin} />
              </>
            )}
          />
        </>
      ) : (
        <Empty
          hideButton={hideButton}
          message="There are no competitions yet"
        />
      )}
    </View>
  )
}

CompetitionList.propTypes = {
  competitions: PropTypes.array,
  loading: PropTypes.bool,
  hideButton: PropTypes.bool
}

export default CompetitionList

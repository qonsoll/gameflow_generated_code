import React from 'react'
import dynamicStyles from './MatchList.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { FlatList, View } from 'react-native'
import { MatchSimpleView } from '~/domains/Match/components'
import { Loading, Empty } from '~/components'
import { Divider } from 'native-base'

const MatchList = (props) => {
  const { matches, loading, hideButton } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <Loading text={t('Matches are loading')} />
      ) : matches?.length > 0 ? (
        <>
          <Divider ml={styles.divider.margin} />
          <FlatList
            data={matches}
            renderItem={({ item, index }) => (
              <>
                <MatchSimpleView
                  isLast={matches?.length - 1 === index}
                  match={item}
                />
                <Divider ml={styles.divider.margin} />
              </>
            )}
          />
        </>
      ) : (
        <Empty hideButton={hideButton} message="There are no matches yet" />
      )}
    </View>
  )
}

MatchList.propTypes = {
  matches: PropTypes.array,
  loading: PropTypes.bool,
  hideButton: PropTypes.bool
}

export default MatchList

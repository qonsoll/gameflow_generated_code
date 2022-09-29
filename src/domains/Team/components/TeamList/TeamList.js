import React from 'react'
import dynamicStyles from './TeamList.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { FlatList, View } from 'react-native'
import { TeamSimpleView } from '~/domains/Team/components'
import { Loading, Empty } from '~/components'
import { Divider } from 'native-base'

const TeamList = (props) => {
  const { teams, loading, hideButton } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <Loading text={t('Teams are loading')} />
      ) : teams?.length > 0 ? (
        <>
          <FlatList
            data={teams}
            renderItem={({ item, index }) => (
              <>
                <TeamSimpleView
                  isLast={teams?.length - 1 === index}
                  team={item}
                />
              </>
            )}
          />
        </>
      ) : (
        <Empty hideButton={hideButton} message="There are no teams yet" />
      )}
    </View>
  )
}

TeamList.propTypes = {
  teams: PropTypes.array,
  loading: PropTypes.bool,
  hideButton: PropTypes.bool
}

export default TeamList

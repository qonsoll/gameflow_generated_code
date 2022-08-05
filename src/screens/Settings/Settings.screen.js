import { View } from 'react-native'
import { LogoSmall } from '~/__constants__/assets'
import React from 'react'

import { PageWrapper } from '~/components'
import { UserSimpleView } from '~/domains/User/components'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'
import { useSettingsActions, useSettingsItems } from './hooks'
import { MenuList } from '~/components'

const SettingsScreen = () => {
  const styles = dynamicStyles()
  const { t } = useTranslations()
  const { onProfile, onDashboard } = useSettingsActions()
  const { SETTINGS_ITEMS, EXTRA_ACTIONS } = useSettingsItems()

  return (
    <PageWrapper
      withLogo={false}
      leftButtonIcon={LogoSmall}
      leftButtonAction={onDashboard}
      rightButtonText={t('Edit')}
      rightButtonAction={onProfile}>
      <UserSimpleView />

      <View style={styles.wrapper}>
        <View style={styles.container}>
          <MenuList data={SETTINGS_ITEMS} />
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.container}>
          <MenuList data={EXTRA_ACTIONS} />
        </View>
      </View>
    </PageWrapper>
  )
}

export default SettingsScreen

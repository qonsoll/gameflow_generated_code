import { useSettingsActions, useSettingsItems } from './hooks'

import { Container } from 'native-base'
import { LogoSmall } from '~/__constants__/assets'
import { MenuList } from '~/components'
import { PageWrapper } from '~/components'
import React from 'react'
import { UserSimpleView } from '~/domains/User/components'
import { View } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

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
      <Container>
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
      </Container>
    </PageWrapper>
  )
}

export default SettingsScreen

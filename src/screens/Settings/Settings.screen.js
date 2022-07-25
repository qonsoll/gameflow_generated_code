import { Alert, TouchableOpacity, View } from 'react-native'
import {
  ArrowShortRight3x,
  Doc3x,
  LogOut,
  LogoSmall,
  Mail3x,
  Profile2x,
  Trash3x
} from '~/constants/assets'
import { DASHBOARD_SCREEN, PROFILE_SCREEN } from '~/constants/screens'

import FastImage from 'react-native-fast-image'
import Language from '~/components/Language/Language'
import { PageWrapper } from '~/components'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { UserSimpleView } from '~/domains/User/components'
import auth from '@react-native-firebase/auth'
import dynamicStyles from './styles'
import removeUser from '~/domains/User/helpers/removeUser'
import theme from '../../../theme'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'
import { useUserContext } from '~/contexts'

const SettingsScreen = () => {
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t } = useTranslations()
  const { _id } = useUserContext()

  const onProfile = () => navigation.navigate(PROFILE_SCREEN)
  const onContactUs = () => {}
  const onTermsAndPrivacy = () => {}
  const onLogOut = () => auth().signOut()
  const confirmDeletion = () =>
    Alert.alert(
      t('user-confirm-deletion-title'),
      t('user-confirm-deletion-description'),
      [
        {
          text: t('confirm'),
          onPress: () => removeUser({ uid: _id })
        },
        { text: t('cancel'), style: 'cancel' }
      ]
    )

  const settingsItemsMap = {
    PROFILE: {
      icon: Profile2x,
      text: t('settings-profile-item-name'),
      color: theme.CORE.COLORS['grey-4'],
      action: onProfile,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    CONTACT_US: {
      icon: Mail3x,
      text: t('settings-contact-us-item-name'),
      color: theme.CORE.COLORS['grey-4'],
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    TERMS_AND_PRIVACY: {
      icon: Doc3x,
      text: t('settings-terms-and-privacy-item-name'),
      color: theme.CORE.COLORS['grey-4'],
      action: onTermsAndPrivacy,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    LOG_OUT: {
      icon: LogOut,
      text: t('settings-log-out-item-name'),
      color: theme.CORE.COLORS['danger-default'],
      action: onLogOut,
      isArrowShow: true,
      textColor: 'danger-default'
    },
    DELETE_USER: {
      icon: Trash3x,
      text: t('settings-user-remove-item-name'),
      color: theme.CORE.COLORS['danger-default'],
      action: confirmDeletion,
      isArrowShow: true,
      textColor: 'danger-default'
    }
  }

  return (
    <PageWrapper
      leftButtonIcon={LogoSmall}
      leftButtonAction={() => navigation.navigate(DASHBOARD_SCREEN)}>
      <Language />
      <UserSimpleView />

      <View style={styles.container}>
        {Object.keys(settingsItemsMap).map((item, index) => (
          <TouchableOpacity
            onPress={settingsItemsMap[item].action}
            key={item}
            style={[styles.item, index === 2 && styles.itemWithMargin]}>
            <View style={styles.textWrapper}>
              <View style={styles.iconContainer}>
                <FastImage
                  source={settingsItemsMap[item].icon}
                  tintColor={settingsItemsMap[item].color}
                  style={styles.icon}
                />
              </View>
              <Text
                numberOfLines={1}
                variant="body1"
                fontWeight="medium"
                color={settingsItemsMap[item].textColor}>
                {settingsItemsMap[item].text}
              </Text>
            </View>
            {!!settingsItemsMap[item].isArrowShow && (
              <FastImage
                source={ArrowShortRight3x}
                tintColor={settingsItemsMap[item].color}
                style={styles.arrowIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </PageWrapper>
  )
}

export default SettingsScreen

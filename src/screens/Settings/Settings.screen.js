import { Alert, TouchableOpacity, View } from 'react-native'
import {
  ArrowShortRight3x,
  Doc3x,
  LogOut,
  LogoSmall,
  Mail3x,
  Profile2x,
  Trash3x
} from '~/__constants__/assets'
import { DASHBOARD_SCREEN, PROFILE_SCREEN } from '~/__constants__/screens'

import FastImage from 'react-native-fast-image'
import { PageWrapper } from '~/components'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { UserSimpleView } from '../../domains/User/components'
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
      iconColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onProfile,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    CONTACT_US: {
      icon: Mail3x,
      text: t('settings-contact-us-item-name'),
      iconColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    TERMS_AND_PRIVACY: {
      icon: Doc3x,
      text: t('settings-terms-and-privacy-item-name'),
      iconColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onTermsAndPrivacy,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  }

  const extraActionsMap = {
    LOG_OUT: {
      icon: LogOut,
      text: t('settings-log-out-item-name'),
      iconColor: theme.COMPONENTS.ICON.variants.danger.backgroundColor,
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: onLogOut,
      isArrowShow: true,
      textColor: 'danger-default'
    },
    DELETE_USER: {
      icon: Trash3x,
      text: t('settings-user-remove-item-name'),
      iconColor: theme.COMPONENTS.ICON.variants.danger.backgroundColor,
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: confirmDeletion,
      isArrowShow: true,
      textColor: 'danger-default'
    }
  }

  return (
    <PageWrapper
      withLanguage
      withLogo={false}
      leftButtonIcon={LogoSmall}
      leftButtonAction={() => navigation.navigate(DASHBOARD_SCREEN)}>
      <UserSimpleView />

      <View style={styles.wrapper}>
        <View style={styles.container}>
          {Object.keys(settingsItemsMap).map((item, index) => (
            <TouchableOpacity
              onPress={settingsItemsMap[item].action}
              key={item}
              style={styles.item}>
              <View style={styles.textWrapper}>
                <View style={styles.iconContainer}>
                  <FastImage
                    source={settingsItemsMap[item].icon}
                    tintColor={settingsItemsMap[item].colorColor}
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
                  tintColor={settingsItemsMap[item].arrowColor}
                  style={styles.arrowIcon}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.container}>
          {Object.keys(extraActionsMap).map((item, index) => (
            <TouchableOpacity
              onPress={extraActionsMap[item].action}
              key={item}
              style={styles.item}>
              <View style={styles.textWrapper}>
                <View style={styles.iconContainer}>
                  <FastImage
                    source={extraActionsMap[item].icon}
                    tintColor={extraActionsMap[item].iconColor}
                    style={styles.icon}
                  />
                </View>
                <Text
                  numberOfLines={1}
                  variant="body1"
                  fontWeight="medium"
                  color={extraActionsMap[item].textColor}>
                  {extraActionsMap[item].text}
                </Text>
              </View>
              {!!extraActionsMap[item].isArrowShow && (
                <FastImage
                  source={ArrowShortRight3x}
                  tintColor={extraActionsMap[item].arrowColor}
                  style={styles.arrowIcon}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </PageWrapper>
  )
}

export default SettingsScreen

import { Alert, Dimensions, TouchableOpacity, View } from 'react-native'
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
import React, { Fragment } from 'react'

import { Divider } from 'native-base'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PageWrapper } from '~/components'
import { Text } from '@qonsoll/react-native-design'
import { UserSimpleView } from '../../domains/User/components'
import auth from '@react-native-firebase/auth'
import dynamicStyles from './styles'
import removeUser from '~/domains/User/helpers/removeUser'
import theme from '../../../theme'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'
import { useUserContext } from '~/contexts'

const windowWidth = Dimensions.get('window').width

const LANGUAGES = { en: 'English', no: 'Norsk', uk: 'Ukraine' }

const SettingsScreen = () => {
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t, language } = useTranslations()
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
    // PROFILE: {
    //   icon: 'Person',
    //   text: t('settings-profile-item-name'),
    //   iconBackgroundColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
    //   arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
    //   action: onProfile,
    //   isArrowShow: true,
    //   textColor: 'grey-4'
    // },
    LANGUAGE: {
      icon: 'language',
      text: t('settings-language-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['primary-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4',
      description: LANGUAGES[language]
    },
    CONTACT_US: {
      icon: 'email',
      text: t('settings-contact-us-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['info-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    TERMS_AND_PRIVACY: {
      icon: 'shield',
      text: t('settings-terms-and-privacy-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['warning-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onTermsAndPrivacy,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  }

  const extraActionsMap = {
    LOG_OUT: {
      icon: 'logout',
      text: t('settings-log-out-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['danger-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: onLogOut,
      isArrowShow: true,
      textColor: 'grey-4'
    }
    // DELETE_USER: {
    //   icon: 'trash',
    //   text: t('settings-user-remove-item-name'),
    //   iconBackgroundColor:
    //     theme.COMPONENTS.ICON.variants.danger.backgroundColor,
    //   arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
    //   action: confirmDeletion,
    //   isArrowShow: true,
    //   textColor: 'danger-default'
    // }
  }

  return (
    <PageWrapper
      // title="qwe"
      // withLanguage
      withLogo={false}
      leftButtonIcon={LogoSmall}
      leftButtonAction={() => navigation.navigate(DASHBOARD_SCREEN)}
      rightButtonText={t('Edit')}
      rightButtonAction={onProfile}>
      <UserSimpleView />

      <View style={styles.wrapper}>
        <View style={styles.container}>
          {Object.keys(settingsItemsMap).map((item, index) => (
            <Fragment key={item}>
              <TouchableOpacity
                onPress={settingsItemsMap[item].action}
                style={styles.item}>
                <View style={styles.textWrapper}>
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          settingsItemsMap[item].iconBackgroundColor
                      }
                    ]}>
                    <Icon
                      name={settingsItemsMap[item].icon}
                      size={20}
                      style={{
                        textAlign: 'center'
                      }}
                      color={theme.CORE.COLORS.white}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    variant="body1"
                    color={settingsItemsMap[item].textColor}>
                    {settingsItemsMap[item].text}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text variant="body1" color="grey-6" mr={4}>
                    {settingsItemsMap[item].description}
                  </Text>
                  {!!settingsItemsMap[item].isArrowShow && (
                    <Icon
                      name="chevron-right"
                      size={24}
                      style={{
                        textAlign: 'center'
                      }}
                      color={theme.CORE.COLORS['grey-7']}
                    />
                  )}
                </View>
              </TouchableOpacity>
              {Object.keys(settingsItemsMap)?.length - 1 !== index && (
                <Divider width={windowWidth - 86} ml={62} />
              )}
            </Fragment>
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
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: extraActionsMap[item].iconBackgroundColor
                    }
                  ]}>
                  <Icon
                    name={extraActionsMap[item].icon}
                    size={20}
                    color={theme.CORE.COLORS.white}
                  />
                </View>
                <Text
                  numberOfLines={1}
                  variant="body1"
                  color={extraActionsMap[item].textColor}>
                  {extraActionsMap[item].text}
                </Text>
              </View>
              {!!extraActionsMap[item].isArrowShow && (
                <Icon
                  name="chevron-right"
                  size={24}
                  style={{
                    textAlign: 'center'
                  }}
                  color={theme.CORE.COLORS['grey-7']}
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

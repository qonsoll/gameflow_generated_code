import { Apple3x, GoogleColored3x, Mail3x } from '../../../constants/assets'
import { Image, TouchableOpacity, View } from 'react-native'
import {
  LOGIN_WITH_EMAIL_SCREEN,
  SIGN_UP_WITH_EMAIL_SCREEN
} from '../../../constants/screens'
import React, { Fragment } from 'react'
import { appleAuth, googleAuth } from '../../../hooks/auth'

import { BackgroundGradient } from '../../../components'
import { Language } from '../../../components'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const SignInScreen = () => {
  const styles = dynamicStyles()
  const { t } = useTranslations()

  const navigation = useNavigation()

  return (
    <Fragment>
      {/* Background gradient */}
      <BackgroundGradient />

      {/* Language button */}
      <Language />

      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text variant="h2" color="white" mb={8}>
            {t('sign-in-title')}
          </Text>
          <Text variant="body1" color="white" mb={48}>
            {t('sign-in-description')}
          </Text>

          {/* Google button */}
          <TouchableOpacity
            onPress={() => googleAuth.loginOrSignUpWithGoogle()}
            style={styles.googleButton}>
            <Image source={GoogleColored3x} style={styles.socialIcon} />
            <Text variant="body1" fontWeight="medium" color="grey-5">
              {t('sign-in-with-google-button-text')}
            </Text>
          </TouchableOpacity>

          {/* Apple button */}
          <TouchableOpacity
            onPress={() => appleAuth.loginOrSignUpWithApple()}
            style={styles.appleButton}>
            <Image source={Apple3x} style={styles.socialIcon} />
            <Text variant="body1" fontWeight="medium" color="grey-5">
              {t('sign-in-with-apple-button-text')}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.leftDivider} />
            <Text variant="body1" fontWeight="medium" color="white" mx={12}>
              {t('or').toUpperCase()}
            </Text>
            <View style={styles.rightDivider} />
          </View>

          {/* Email button */}
          <TouchableOpacity
            onPress={() => navigation.navigate(LOGIN_WITH_EMAIL_SCREEN)}
            style={styles.emailButton}>
            <Image source={Mail3x} style={styles.socialIcon} />
            <Text variant="body1" fontWeight="medium" color="grey-5">
              {t('login-with-email-button-text')}
            </Text>
          </TouchableOpacity>

          {/* Bottom section */}
          <View style={styles.bottomSectionWrapper}>
            <Text variant="body1" fontWeight="medium" color="white-t-lighten1">
              {t('do not have account')}?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SIGN_UP_WITH_EMAIL_SCREEN)}>
              <Text variant="body1" fontWeight="medium" color="white">
                {t('sign up')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default SignInScreen

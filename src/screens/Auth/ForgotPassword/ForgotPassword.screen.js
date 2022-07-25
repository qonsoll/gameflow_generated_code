import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { AuthHeader, BackgroundGradient } from '../../../components'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native'
import { useKeyboardState, useSwipe } from '../../../hooks'

import { ForgotPasswordForm } from '../../../domains/Auth/components/ForgotPasswordForm'
import React from 'react'
import { SIGN_IN_SCREEN } from '../../../constants/screens'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { resetPassword } from '../../../helpers/auth'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const ForgotPasswordScreen = () => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t } = useTranslations()
  const isKeyboardVisible = useKeyboardState()

  // [COMPUTED_PROPERTIES]
  const titleProps = isKeyboardVisible
    ? { mt: 64, mb: 8, variant: 'h3' }
    : { mt: 0, mb: 0, variant: 'h2' }

  // [HANDLERS]
  const onFinish = async (credentials) => {
    try {
      await resetPassword(credentials.email)
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: t('reset-password-success-send-title'),
        textBody: t('reset-password-success-send-text')
      })
      navigation.navigate(SIGN_IN_SCREEN)
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: t('reset-password-error-title'),
        textBody: t('reset-password-error-text')
      })
    }
  }

  const handleWrapperPress = () => Keyboard.dismiss()
  const handleBackPress = () => navigation.goBack()
  const { onTouchStart, onTouchEnd } = useSwipe(null, handleBackPress)

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleWrapperPress}>
      {/* Background gradient */}
      <BackgroundGradient />

      {/* Auth header */}
      <AuthHeader />

      <View
        style={styles.wrapper}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
          <View style={styles.container}>
            {/* Title */}
            <Text color="white" {...titleProps}>
              {t('forgot-password-title')}
            </Text>
            {!isKeyboardVisible && (
              <Text variant="body1" color="white" mt={8} mb={48}>
                {t('forgot-password-description')}
              </Text>
            )}

            {/* Form */}
            <ForgotPasswordForm onFinish={onFinish} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableOpacity>
  )
}

export default ForgotPasswordScreen

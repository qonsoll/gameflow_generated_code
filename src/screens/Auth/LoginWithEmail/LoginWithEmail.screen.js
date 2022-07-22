import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { AuthHeader, BackgroundGradient } from '../../../components'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useKeyboardState, useSwipe } from '../../../hooks'

import { FORGOT_PASSWORD_SCREEN } from '../../../constants/screens'
import { LoginForm } from '../../../domains/Auth/components/LoginForm'
import { Text } from '@qonsoll/react-native-design'
import auth from '@react-native-firebase/auth'
import dynamicStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const LoginWithEmailScreen = () => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t } = useTranslations()
  const isKeyboardVisible = useKeyboardState()

  // [COMPONENT_STATE_HOOKS]
  const [isSpin, setIsSpin] = useState(false)

  // [COMPUTED_PROPERTIES]
  const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height'
  const titleProps = isKeyboardVisible
    ? { mt: 48, mb: 24, variant: 'h3' }
    : { mt: 0, mb: 0, variant: 'h2' }

  // [HANDLERS]
  // TODO MOVE TO SEPARATE HELPER || HOOK
  const onEmailLogin = async (credentials) => {
    const { email, password } = credentials
    try {
      setIsSpin(true)
      await auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: t('login-error-title'),
        textBody: t('login-error-text')
      })
    }
    setIsSpin(false)
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

      <SafeAreaView>
        <View
          style={styles.wrapper}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}>
          <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={keyboardBehavior}>
            <View style={styles.container}>
              {/* Title */}
              <Text color="white" {...titleProps}>
                {t('sign-in-with-email-title')}
              </Text>
              {!isKeyboardVisible && (
                <Text variant="body1" color="white" mt={8} mb={48}>
                  {t('sign-in-with-email-description')}
                </Text>
              )}

              {/* Form */}
              <LoginForm onFinish={onEmailLogin} loading={isSpin} />

              {/* Bottom section */}
              <View style={styles.bottomContainer}>
                <Text
                  variant="body1"
                  fontWeight="medium"
                  color="white-t-lighten1">
                  {t('go-to-forgot-password-caption')}?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}>
                  <Text variant="body1" fontWeight="medium" color="white">
                    {t('go-to-reset-password-button-text')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  )
}

export default LoginWithEmailScreen

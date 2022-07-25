import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { AuthHeader, BackgroundGradient } from '../../../components'
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useKeyboardState, useSwipe } from '~/hooks'

import { SignupForm } from '~/domains/Auth/components'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { signupWithCredentials } from '~/helpers/auth'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const SignUpWithEmailScreen = () => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t } = useTranslations()
  const isKeyboardVisible = useKeyboardState()

  // [COMPONENT_STATE_HOOKS]
  const [isSpin, setIsSpin] = useState(false)

  // [COMPUTED_PROPERTIES]
  const titleProps = isKeyboardVisible
    ? styles.titlePropsWithKeyboard
    : styles.titleProps

  // [HANDLERS]
  const onFinish = async (credentials) => {
    try {
      setIsSpin(true)
      const { email, password } = credentials
      await signupWithCredentials(email, password)
    } catch (error) {
      console.error(error)

      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: t('signup-error-title'),
        textBody: t('signup-error-text')
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
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
            <View style={styles.container}>
              {/* Title */}
              <Text color="white" {...titleProps}>
                {t('sign-up-title')}
              </Text>
              {!isKeyboardVisible && (
                <Text variant="body1" color="white" mb={48}>
                  {t('sign-up-description')}
                </Text>
              )}

              {/* Form */}
              <SignupForm onFinish={onFinish} loading={isSpin} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  )
}

export default SignUpWithEmailScreen

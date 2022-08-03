import { Box, Text } from '@qonsoll/react-native-design'
import { Form, Input } from '~/components'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'
import { validateEmail } from '~/helpers'

const LoginForm = (props) => {
  const { loading, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()
  const form = Form.useForm()
  const styles = dynamicStyles()

  // [COMPUTED_PROPERTIES]
  const emailValidationRules = {
    required: t('email-required-validation-message'),
    validate: (email) => validateEmail(t, email)
  }
  const passwordValidationRules = {
    required: t('password-required-validation-message')
  }

  // [HANDLERS]
  const handleLogin = () => form.submit()

  return (
    <Form form={form} {...rest}>
      <Box mb={12}>
        <Form.Item
          label={t('email-label')}
          labelColor="white"
          name="email"
          margins="xs"
          rules={emailValidationRules}>
          <Input
            disabled={loading}
            placeholder={t('email-input-placeholder')}
            style={styles.input}
            shape="rounded"
            autoCorrect={false}
          />
        </Form.Item>
        <Form.Item
          margins="xs"
          label={t('password-label')}
          labelColor="white"
          name="password"
          rules={passwordValidationRules}>
          <Input
            disabled={loading}
            placeholder={t('password-input-placeholder')}
            secureTextEntry
            style={styles.input}
          />
        </Form.Item>
      </Box>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text variant="body1" fontWeight="medium" color="grey-5">
          {t('sign-in-button-text')}
        </Text>
      </TouchableOpacity>
    </Form>
  )
}

export default LoginForm

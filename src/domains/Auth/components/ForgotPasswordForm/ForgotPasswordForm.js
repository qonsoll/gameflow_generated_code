import { Box, Text } from '@qonsoll/react-native-design'
import { Form, Input } from '~/components'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'
import { validateEmail } from '~/helpers'

const ForgotPasswordForm = (props) => {
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

  // [HANDLERS]
  const handleForgotPassword = () => form.submit()

  return (
    <Form form={form} {...rest}>
      <Box mb={12}>
        <Form.Item
          name="email"
          label={t('email-label')}
          labelColor="white"
          margins="sm"
          rules={emailValidationRules}>
          <Input
            disabled={loading}
            placeholder={t('email-input-placeholder')}
            style={styles.input}
            autoCorrect={false}
          />
        </Form.Item>
      </Box>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.button}>
        <Text variant="body1" fontWeight="medium" color="grey-5">
          {t('forgot-password-button-text')}
        </Text>
      </TouchableOpacity>
    </Form>
  )
}

export default ForgotPasswordForm

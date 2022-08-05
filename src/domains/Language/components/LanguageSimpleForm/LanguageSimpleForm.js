import React from 'react'
import styles from './LanguageSimpleForm.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'
import { FormControl, Stack, Input } from 'native-base'

const LanguageSimpleForm = (props) => {
  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()

  return (
    <View>
      <FormControl>
        <Stack>
          <FormControl.Label>{t('Name')}</FormControl.Label>
          <Input />
        </Stack>
      </FormControl>
    </View>
  )
}

LanguageSimpleForm.propTypes = {}

export default LanguageSimpleForm

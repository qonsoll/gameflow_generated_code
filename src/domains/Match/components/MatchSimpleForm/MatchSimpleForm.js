import React from 'react'
import dynamicStyles from './MatchSimpleForm.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View, TouchableOpacity } from 'react-native'
import { Container, Divider, Text } from 'native-base'
import { Form, Input } from '~/components/Form'
import { theme } from '~/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IMAGE_UPLOAD_SCREEN } from '~/__constants__/screens'
import { useNavigation } from '@react-navigation/native'
import { DatePicker } from '~/components'

const MatchSimpleForm = (props) => {
  const { form } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  return (
    <Container>
      <Form form={form}>
        <Text variant="caption1" style={styles.label}>
          {t('STREAM URL')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="streamUrl">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('SETTINGS')}
        </Text>
        <View style={styles.wrapper}>
          <View style={styles.formItem}>
            <Text>{t('Start date')}</Text>
            <Form.Item name="startDate">
              <DatePicker />
            </Form.Item>
          </View>
        </View>
      </Form>
    </Container>
  )
}

MatchSimpleForm.propTypes = {
  form: PropTypes.object
}

export default MatchSimpleForm

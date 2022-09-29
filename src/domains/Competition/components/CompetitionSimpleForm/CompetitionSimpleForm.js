import React from 'react'
import dynamicStyles from './CompetitionSimpleForm.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View, TouchableOpacity } from 'react-native'
import { Container, Divider, Text } from 'native-base'
import { Form, Input, TextArea, Select } from '~/components/Form'
import { theme } from '~/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IMAGE_UPLOAD_SCREEN } from '~/__constants__/screens'
import { useNavigation } from '@react-navigation/native'
import { SEASONS_OPTIONS, TIERS_OPTIONS } from '~/__constants__/enums'
import { DatePicker } from '~/components'

const CompetitionSimpleForm = (props) => {
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
          {t('TITLE')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="title">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('DESCRIPTION')}
        </Text>
        <View style={[styles.wrapper, styles.descriptionWrapper]}>
          <Form.Item name="description">
            <TextArea placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.description}>
          {t('Any details such as about what your competition')}.{' \n'}
          {t('Example: We will make the MVP version in 19 working days')}.
          {t('Do you think this is impossible')}?{' '}
          {t('Read on to see how we do it')}.
        </Text>
        <Text variant="caption1" style={styles.label}>
          {t('PRIZE')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="prize">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('REGION')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="region">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('COLOR')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="color">
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
          <Divider ml={3} />
          <View style={styles.formItem}>
            <Text>{t('End date')}</Text>
            <Form.Item name="endDate">
              <DatePicker />
            </Form.Item>
          </View>
          <Divider ml={3} />
          <View style={styles.formItem}>
            <Form.Item name="season">
              <Select placeholder={t('Season')}>
                {SEASONS_OPTIONS.map((o) => (
                  <Select.Item label={t(o.label)} value={o.value} />
                ))}
              </Select>
            </Form.Item>
          </View>
          <Divider ml={3} />
          <View style={styles.formItem}>
            <Form.Item name="tier">
              <Select placeholder={t('Tier')}>
                {TIERS_OPTIONS.map((o) => (
                  <Select.Item label={t(o.label)} value={o.value} />
                ))}
              </Select>
            </Form.Item>
          </View>
        </View>
      </Form>
    </Container>
  )
}

CompetitionSimpleForm.propTypes = {
  form: PropTypes.object
}

export default CompetitionSimpleForm

import { Avatar, Button, Form, Input, PageWrapper } from '~/components'
import { Box, Text } from '@qonsoll/react-native-design'
import { LayoutAnimation, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserContext, useUserDispatch } from '~/contexts'

import { ArrowShortLeft3x } from '~/__constants__/assets'
import KeyboardListener from 'react-native-keyboard-listener'
import PhoneInput from 'react-native-phone-input'
import dynamicStyles from './styles'
import firestore from '@react-native-firebase/firestore'
import theme from '../../../theme'
import { uploadPhoto } from '~/helpers'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const ProfileScreen = () => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  const user = useUserContext()
  const dispatch = useUserDispatch()
  const styles = dynamicStyles(isKeyboardOpen)
  const form = Form.useForm()
  const { firstName, lastName, avatarUrl, phone, _id } = user

  const [userData, setUserData] = useState({
    avatarUrl,
    firstName,
    lastName,
    phone
  })
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [isSpin, setIsSpin] = useState(false)

  const onUserDataChange = (data) => setUserData({ ...userData, ...data })

  useEffect(() => {
    LayoutAnimation.spring()
  }, [isKeyboardOpen])

  const onSave = async () => {
    setIsSpin(true)
    let url = userData?.avatarUrl

    // Checking is avatar changed and exist
    if (userData?.avatarUrl && userData?.avatarUrl !== avatarUrl) {
      // Upload new avatar to storage and getting url
      url = await uploadPhoto({ userData, _id })
    }

    const data = {
      ...userData,
      avatarUrl: url,
      _updatedAt: firestore.FieldValue.serverTimestamp(),
      _isUpdated: true,
      _updatedBy: _id
    }

    // Update user data context
    await dispatch({
      type: 'SET_DATA',
      data: { ...user, ...data }
    })
    // Update user data in DB
    await firestore().collection('users').doc(_id).update(data)
    setIsSpin(false)

    navigation.goBack()
  }

  const isSaveButtonDisabled = !(
    (userData?.avatarUrl !== avatarUrl ||
      userData?.firstName !== firstName ||
      userData?.lastName !== lastName ||
      userData?.phone !== phone) &&
    userData?.firstName &&
    userData?.lastName &&
    userData?.phone
  )

  return (
    <PageWrapper
      leftButtonIcon={ArrowShortLeft3x}
      leftButtonAction={() => navigation.goBack()}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <Text variant="h3" mb={16}>
            {t('profile-title')}
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={isKeyboardOpen ? 0 : 16}
            position={isKeyboardOpen ? 'absolute' : 'relative'}
            right={isKeyboardOpen ? 0 : null}>
            <Avatar
              size={isKeyboardOpen ? 36 : 130}
              isEditable
              url={userData?.avatarUrl}
              onChange={(url) => {
                onUserDataChange({ avatarUrl: url })
              }}
            />
          </Box>

          <Form form={form}>
            <Box>
              <Form.Item
                label={t('profile-first-name-label')}
                name="firstName"
                margins="xs"
                initialValue={firstName}>
                <Input
                  onChangeText={(text) => {
                    form.setFieldsValue({ firstName: text })
                    onUserDataChange({ firstName: text })
                  }}
                  value={userData?.firstName}
                  placeholder={t('profile-first-name-placeholder')}
                  style={{ box: styles.input }}
                />
              </Form.Item>
              <Form.Item
                margins="xs"
                label={t('profile-last-name-label')}
                name="lastName"
                initialValue={lastName}>
                <Input
                  onChangeText={(text) => {
                    form.setFieldsValue({ lastName: text })
                    onUserDataChange({ lastName: text })
                  }}
                  value={userData?.lastName}
                  placeholder={t('profile-last-name-placeholder')}
                  style={{ box: styles.input }}
                />
              </Form.Item>
            </Box>
          </Form>

          <View>
            <Text variant="body1" mb={4}>
              {t('profile-phone-label')}
            </Text>
            <View style={styles.phoneContainer}>
              <PhoneInput
                onChangePhoneNumber={(data) =>
                  onUserDataChange({ phone: data.slice(1) })
                }
                autoFormat
                style={styles.phoneInput}
                textProps={{ maxLength: 16 }}
                flagStyle={{
                  borderColor: theme.CORE.COLORS['input-border-color'],
                  borderRightWidth: 1,
                  borderWidth: 0
                }}
                initialCountry="no"
                initialValue={phone || '+47'}
                textStyle={styles.textStyle}
                cancelTextStyle={styles.inputFontSize}
                confirmTextStyle={styles.inputFontSize}
                cancelText={t('cancel')}
                confirmText={t('confirm')}
                maxLength={5}
              />
            </View>
          </View>
          <View style={isKeyboardOpen && styles.buttonContainer}>
            <Button
              loading={isSpin}
              color="white"
              disabled={isSaveButtonDisabled}
              variant="primary"
              style={styles.button}
              onPress={onSave}>
              {!isSpin && (
                <Text
                  variant="h4"
                  color={isSaveButtonDisabled ? 'grey-7' : 'white'}>
                  {t('save')}
                </Text>
              )}
            </Button>
          </View>
        </ScrollView>
      </View>
      <KeyboardListener
        onWillShow={() => setIsKeyboardOpen(true)}
        onWillHide={() => setIsKeyboardOpen(false)}
      />
    </PageWrapper>
  )
}

export default ProfileScreen

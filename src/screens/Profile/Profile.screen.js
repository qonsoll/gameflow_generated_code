import { Avatar, PageWrapper } from '~/components'
import { Button, Divider, FormControl, Input } from 'native-base'
import { Dimensions, LayoutAnimation, UIManager, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserContext, useUserDispatch } from '~/contexts'

import PhoneInput from 'react-native-phone-input'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import firestore from '@react-native-firebase/firestore'
import { isIOS } from '../../__constants__'
import theme from '../../../theme'
import { uploadPhoto } from '~/helpers'
import { useKeyboardWithAnimationPresetState } from '../../hooks'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const windowWidth = Dimensions.get('window').width

if (!isIOS) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

const ProfileScreen = () => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  const user = useUserContext()
  const dispatch = useUserDispatch()
  const isKeyboardOpen = useKeyboardWithAnimationPresetState()
  const styles = dynamicStyles(isKeyboardOpen)
  const { firstName, lastName, avatarUrl, phone, _id } = user

  const [userData, setUserData] = useState({
    avatarUrl,
    firstName,
    lastName,
    phone
  })
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
      withLogo={false}
      rightButtonText={t('Done')}
      rightButtonAction={() => {}}
      leftButtonText={t('Cancel')}
      leftButtonAction={navigation.goBack}>
      <Avatar
        size={100}
        isEditable
        url={userData?.avatarUrl}
        onChange={(url) => {
          onUserDataChange({ avatarUrl: url })
        }}
      />
      <View style={{ width: '100%', paddingHorizontal: 16 }}>
        <View
          style={{
            width: '100%',
            height: 72,
            backgroundColor: 'white',
            borderRadius: 8,
            justifyContent: 'center',
            marginBottom: 4
          }}>
          <FormControl isRequired>
            <Input
              variant="unstyled"
              value={userData.firstName}
              placeholder={t('First Name')}
            />
          </FormControl>
          <Divider ml={3} style={{ width: windowWidth - 44 }} />
          <FormControl isRequired>
            <Input
              variant="unstyled"
              value={userData.lastName}
              placeholder={t('Last Name')}
            />
          </FormControl>
        </View>
        <Text
          styleOverride={{ ...theme.CORE.FONTS.caption1, fontWeight: '500' }}
          fontWeight={'600'}
          variant="caption1"
          color="grey-6"
          mx={12}>
          {t('Enter your name and add an optional profile photo')}.
        </Text>
        <Text
          // styleOverride={{ ...theme.CORE.FONTS.caption1 }}
          fontWeight="medium"
          variant="caption1"
          color="grey-6"
          mx={12}>
          {t('Enter your name and add an optional profile photo')}.
        </Text>

        <PhoneInput
          onChangePhoneNumber={(data) =>
            onUserDataChange({ phone: data.slice(1) })
          }
          autoFormat
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
        {/* <Button onPress={onSave} isDisabled={isSaveButtonDisabled}>
          Save
        </Button> */}
      </View>
    </PageWrapper>
  )
}

export default ProfileScreen

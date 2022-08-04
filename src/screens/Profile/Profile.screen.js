<<<<<<< Updated upstream
import { Avatar, Button, Form, Input, PageWrapper } from '~/components'
import { Box, Text } from '@qonsoll/react-native-design'
import { LayoutAnimation, ScrollView, UIManager, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserContext, useUserDispatch } from '~/contexts'

import { ArrowShortLeft3x } from '~/__constants__/assets'
import PhoneInput from 'react-native-phone-input'
=======
import { Avatar, Form, PageWrapper } from '~/components'
import { LayoutAnimation, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserContext, useUserDispatch } from '~/contexts'

>>>>>>> Stashed changes
import dynamicStyles from './styles'
import firestore from '@react-native-firebase/firestore'
import theme from '../../../theme'
import { uploadPhoto } from '~/helpers'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'
<<<<<<< Updated upstream
import { isIOS } from '../../__constants__'
import { useKeyboardWithAnimationPresetState } from '../../hooks'

if (!isIOS) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}
=======
import { FormControl, Input, Button } from 'native-base'
import PhoneInput from 'react-native-phone-input'
>>>>>>> Stashed changes

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
    <PageWrapper>
      <Avatar
        size={isKeyboardOpen ? 36 : 130}
        isEditable
        url={userData?.avatarUrl}
        onChange={(url) => {
          onUserDataChange({ avatarUrl: url })
        }}
      />
      <FormControl isRequired>
        <Input value={userData.firstName} placeholder="firstName" />
      </FormControl>
      <FormControl isRequired>
        <Input value={userData.lastName} placeholder="lastName" />
      </FormControl>
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
      <Button onPress={onSave} isDisabled={isSaveButtonDisabled}>
        Save
      </Button>
    </PageWrapper>
  )
}

export default ProfileScreen

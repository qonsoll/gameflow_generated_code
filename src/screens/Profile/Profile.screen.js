import { Avatar, PageWrapper } from '~/components'
import { Container, Divider, FormControl, Text } from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity, UIManager, View } from 'react-native'
import { useUserContext, useUserDispatch } from '~/contexts'

import { Input } from '~/components/Form'
import { MenuList } from '~/components'
import dynamicStyles from './styles'
import firestore from '@react-native-firebase/firestore'
import { isIOS } from '../../__constants__'
import { uploadPhoto } from '~/helpers'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

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
  const styles = dynamicStyles()
  const { firstName, lastName, avatarUrl, phone, _id, bio, email } = user

  const [userData, setUserData] = useState({
    avatarUrl,
    firstName,
    lastName,
    bio,
    phone,
    email
  })

  const MENU_ACTIONS = [
    {
      text: t('Change Number'),
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
      description: '+' + userData?.phone
    },
    {
      text: t('Email'),
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
      description: userData?.email
    }
  ]

  const onUserDataChange = (data) => setUserData({ ...userData, ...data })

  const onSave = async () => {
    let url = userData?.avatarUrl

    // Checking is avatar changed and exist
    if (userData?.avatarUrl && userData?.avatarUrl !== avatarUrl) {
      // Upload new avatar to storage and getting url
      url = await uploadPhoto({ path: userData.avatarUrl, _id })
    }

    const data = {
      avatarUrl: url,
      bio: userData?.bio ?? null,
      lastName: userData?.lastName ?? null,
      firstName: userData?.firstName ?? null,
      phone: userData?.phone ?? null,
      email: userData?.email ?? null,
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

    navigation.goBack()
  }

  const exampleText = t('Example: 23 yo designer from San Francisco').replace(
    ' yo ',
    ' y.o. '
  )

  return (
    <PageWrapper
      withLogo={false}
      rightButtonText={t('Done')}
      rightButtonAction={onSave}
      leftButtonText={t('Cancel')}
      leftButtonAction={navigation.goBack}>
      <Avatar
        size={100}
        isEditable
        url={userData?.avatarUrl}
        onChange={(url) => onUserDataChange({ avatarUrl: url })}
      />
      <Container>
        <View style={styles.formContainer}>
          <FormControl mb={0} isRequired>
            <Input
              variant="unstyled"
              value={userData.firstName}
              onChange={(text) => onUserDataChange({ firstName: text })}
              placeholder={t('First Name')}
            />
          </FormControl>
          <Divider ml={styles.divider.marginLeft} />
          <FormControl mb={0} isRequired>
            <Input
              variant="unstyled"
              value={userData.lastName}
              onChange={(text) => onUserDataChange({ lastName: text })}
              placeholder={t('Last Name')}
            />
          </FormControl>
        </View>

        <Text variant="caption1" color="text-caption-color" mx={4} mb={36}>
          {t('Enter your name and add an optional profile photo')}.
        </Text>

        <View style={styles.formContainer}>
          <FormControl mb={0} isRequired>
            <Input
              variant="unstyled"
              value={userData.bio}
              onChange={(text) => onUserDataChange({ bio: text })}
              placeholder={t('Bio')}
            />
          </FormControl>
        </View>

        <Text variant="caption1" color="text-caption-color" mx={4}>
          {t('Any details such as age, occupation or city')}.
        </Text>
        <Text variant="caption1" color="text-caption-color" mx={4} mb={36}>
          {exampleText}.
        </Text>

        <View style={styles.itemContainer}>
          <MenuList data={MENU_ACTIONS} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text color="danger-default">{t('Delete account')}</Text>
        </TouchableOpacity>
      </Container>
    </PageWrapper>
  )
}

export default ProfileScreen

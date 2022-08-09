import { Avatar, PageWrapper } from '~/components'
import { Dimensions, TouchableOpacity, UIManager, View } from 'react-native'
import { Divider, FormControl, Input } from 'native-base'
import React, { useState } from 'react'
import { useUserContext, useUserDispatch } from '~/contexts'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { MenuList } from '~/components'
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
  const { firstName, lastName, avatarUrl, phone, _id, bio, email } = user

  const [userData, setUserData] = useState({
    avatarUrl,
    firstName,
    lastName,
    bio,
    phone,
    email
  })
  const [isSpin, setIsSpin] = useState(false)

  const PHONE_ACTIONS = [
    {
      text: t('Change Number'),
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
      description: '+' + userData?.phone
    },
    {
      text: t('Email'),
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
      description: userData?.email
    }
  ]

  const onUserDataChange = (data) => setUserData({ ...userData, ...data })

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

  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false)
  const [isLastNameFocused, setIsLastNameFocused] = useState(false)
  const [isBioFocused, setIsBioFocused] = useState(false)

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
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <FormControl isRequired>
            <Input
              variant="unstyled"
              value={userData.firstName}
              onChangeText={(text) => onUserDataChange({ firstName: text })}
              placeholder={t('First Name')}
              style={styles.input}
              onFocus={() => setIsFirstNameFocused(true)}
              onBlur={() => setIsFirstNameFocused(false)}
              InputRightElement={
                isFirstNameFocused &&
                userData.firstName && (
                  <TouchableOpacity
                    onPress={() => onUserDataChange({ firstName: null })}
                    style={styles.iconWrapper}>
                    <Icon
                      name="close"
                      size={12}
                      style={styles.icon}
                      color={theme.CORE.COLORS.white}
                    />
                  </TouchableOpacity>
                )
              }
            />
          </FormControl>
          <Divider ml={3} style={{ width: windowWidth - 48 }} />
          <FormControl isRequired>
            <Input
              variant="unstyled"
              value={userData.lastName}
              onChangeText={(text) => onUserDataChange({ lastName: text })}
              placeholder={t('Last Name')}
              style={styles.input}
              onFocus={() => setIsLastNameFocused(true)}
              onBlur={() => setIsLastNameFocused(false)}
              InputRightElement={
                isLastNameFocused &&
                userData.lastName && (
                  <TouchableOpacity
                    onPress={() => onUserDataChange({ lastName: null })}
                    style={styles.iconWrapper}>
                    <Icon
                      name="close"
                      size={12}
                      style={styles.icon}
                      color={theme.CORE.COLORS.white}
                    />
                  </TouchableOpacity>
                )
              }
            />
          </FormControl>
        </View>

        <Text styleOverride={styles.description} color="grey-6" mx={12} mb={36}>
          {t('Enter your name and add an optional profile photo')}.
        </Text>

        <View style={styles.formContainer}>
          <FormControl isRequired>
            <Input
              variant="unstyled"
              value={userData.bio}
              onChangeText={(text) => onUserDataChange({ bio: text })}
              placeholder={t('Bio')}
              style={styles.input}
              onFocus={() => setIsBioFocused(true)}
              onBlur={() => setIsBioFocused(false)}
              InputRightElement={
                isBioFocused &&
                userData.bio && (
                  <TouchableOpacity
                    onPress={() => onUserDataChange({ bio: null })}
                    style={styles.iconWrapper}>
                    <Icon
                      name="close"
                      style={styles.icon}
                      size={12}
                      color={theme.CORE.COLORS.white}
                    />
                  </TouchableOpacity>
                )
              }
            />
          </FormControl>
        </View>

        <Text styleOverride={styles.description} color="grey-6" mx={12}>
          {t('Any details such as age, occupation or city')}.
        </Text>
        <Text styleOverride={styles.description} color="grey-6" mx={12} mb={36}>
          Example: 23 y.o. designer from San Francisco.
        </Text>

        <View style={styles.itemContainer}>
          <MenuList
            data={PHONE_ACTIONS}
            dividerWidth={windowWidth - 48}
            dividerMarginLeft={4}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text variant="body1" color="danger-default">
            {t('Delete account')}
          </Text>
        </TouchableOpacity>
      </View>
    </PageWrapper>
  )
}

export default ProfileScreen

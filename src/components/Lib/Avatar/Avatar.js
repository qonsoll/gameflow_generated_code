import { Image, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useRef } from 'react'

import ActionSheet from 'react-native-actionsheet'
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker'
import PropTypes from 'prop-types'
import { Text } from 'native-base'
import { UserIcon } from '~/__constants__/assets'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

/**
 * `Avatar` is a function that returns a `Fragment` component that contains a `TouchableOpacity`
 * component that contains a `FastImage` component or a `View` component that contains an `Image`
 * component, a `TouchableOpacity` component that contains a `Text` component, an `ActionSheet`
 * component, and another `ActionSheet` component
 * @param size - The size of the avatar.
 * @param url - The url of the image to be displayed.
 * @param onChange - A callback function that will be called when the user uploads a new photo.
 * @param isEditable - boolean
 * @param cropping - boolean
 * @param avatarContainerStyle - Style object for the avatar container
 * @returns A function that returns a fragment
 */
const Avatar = (props) => {
  const {
    size,
    url,
    onChange,
    isEditable,
    cropping,
    avatarContainerStyle
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles(size)
  const { t } = useTranslations()

  const updatePhotoDialogActionSheet = useRef()
  const photoUploadDialogActionSheet = useRef()

  const onEditButtonPress = () => {
    if (url) {
      updatePhotoDialogActionSheet.current.show()
    } else {
      photoUploadDialogActionSheet.current.show()
    }
  }

  const onPhotoUploadDialogMap = [
    () => onLaunchCamera(),
    () => onOpenPhotos(),
    () => updateUrl(null)
  ]

  const onLaunchCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({ cropping: cropping ?? true })
      updateUrl(image.path)
    } catch (error) {
      console.error(error)
    }
  }

  const onOpenPhotos = async () => {
    try {
      const image = await ImagePicker.openPicker({ cropping: cropping ?? true })
      updateUrl(image.path)
    } catch (error) {
      console.error(error)
    }
  }

  const updateUrl = (avatarUrl) => onChange && onChange(avatarUrl)

  return (
    <Fragment>
      <TouchableOpacity
        style={[styles.avatarContainer, avatarContainerStyle]}
        activeOpacity={1}>
        {url ? (
          <FastImage style={styles.fastImage} source={{ uri: url }} />
        ) : (
          <View style={styles.defaultAvatarContainer}>
            <Image style={styles.defaultAvatar} source={UserIcon} />
          </View>
        )}
      </TouchableOpacity>

      {isEditable && (
        <TouchableOpacity onPress={onEditButtonPress}>
          <Text mb={2} color="primary-default">
            {t('Set New Photo')}
          </Text>
        </TouchableOpacity>
      )}

      <ActionSheet
        ref={updatePhotoDialogActionSheet}
        options={[t('camera'), t('library'), t('remove'), t('cancel')]}
        cancelButtonIndex={3}
        destructiveButtonIndex={2}
        onPress={(index) => onPhotoUploadDialogMap[index]?.()}
      />
      <ActionSheet
        ref={photoUploadDialogActionSheet}
        options={[t('camera'), t('library'), t('cancel')]}
        cancelButtonIndex={2}
        onPress={(index) => onPhotoUploadDialogMap[index]?.()}
      />
    </Fragment>
  )
}

Avatar.propTypes = {
  onChange: PropTypes.func,
  url: PropTypes.string,
  size: PropTypes.number,
  cropping: PropTypes.bool,
  isEditable: PropTypes.bool
}

export default Avatar

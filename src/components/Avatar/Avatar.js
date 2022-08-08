import { Image, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useRef } from 'react'
import { Text, useTheme } from '@qonsoll/react-native-design'

import ActionSheet from 'react-native-actionsheet'
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker'
import PropTypes from 'prop-types'
import { UserIcon } from '../../__constants__/assets'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

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
  const { theme } = useTheme()
  const styles = dynamicStyles(theme, size)
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

  const onPhotoUploadDialogMap = {
    0: () => onLaunchCamera(),
    1: () => onOpenPhotos(),
    2: () => updateUrl(null)
  }

  const onLaunchCamera = () => {
    ImagePicker.openCamera({
      cropping: cropping || true
    })
      .then((image) => {
        updateUrl(image.path)
      })
      .catch((error) => console.error(error))
  }

  const onOpenPhotos = () => {
    ImagePicker.openPicker({
      cropping: cropping || true
    })
      .then((image) => {
        updateUrl(image.path)
      })
      .catch((error) => console.error(error))
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
          <Text variant="body1" mb={8} color="primary-default">
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

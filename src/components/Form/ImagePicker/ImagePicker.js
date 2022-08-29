import { Image, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useRef } from 'react'
import { Text } from '@qonsoll/react-native-design'

import ActionSheet from 'react-native-actionsheet'
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'
import { UserIcon } from '~/__constants__/assets'
import dynamicStyles from './ImagePicker.styles'
import { useTranslations } from '@qonsoll/translation'
import { useImagePickerActions } from './hooks'

const ImagePicker = (props) => {
  const {
    size,
    value,
    onChange,
    isEditable = true,
    cropping,
    avatarContainerStyle
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles(size)
  const { t } = useTranslations()

  const updatePhotoDialogActionSheet = useRef()
  const photoUploadDialogActionSheet = useRef()

  const onEditButtonPress = () => {
    if (value) {
      updatePhotoDialogActionSheet.current.show()
    } else {
      photoUploadDialogActionSheet.current.show()
    }
  }

  const { onPhotoUploadDialogs } = useImagePickerActions({
    cropping,
    onChange
  })

  return (
    <Fragment>
      <TouchableOpacity
        style={[styles.avatarContainer, avatarContainerStyle]}
        activeOpacity={1}>
        {value ? (
          <FastImage style={styles.fastImage} source={{ uri: value }} />
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
        onPress={(index) => onPhotoUploadDialogs[index]?.()}
      />
      <ActionSheet
        ref={photoUploadDialogActionSheet}
        options={[t('camera'), t('library'), t('cancel')]}
        cancelButtonIndex={2}
        onPress={(index) => onPhotoUploadDialogs[index]?.()}
      />
    </Fragment>
  )
}

ImagePicker.propTypes = {
  onChange: PropTypes.func,
  url: PropTypes.string,
  size: PropTypes.number,
  cropping: PropTypes.bool,
  isEditable: PropTypes.bool
}

export default ImagePicker

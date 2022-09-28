import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'

import ActionSheet from 'react-native-actionsheet'
import { Container } from 'native-base'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './ImagePicker.styles'
import { useImagePickerActions } from './hooks'
import { useTranslations } from '@qonsoll/translation'

const ImagePicker = (props) => {
  const {
    size,
    value,
    onChange,
    isEditable = true,
    cropping,
    avatarContainerStyle,
    color
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
    <Container style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.avatarContainer, avatarContainerStyle]}
        activeOpacity={1}>
        {value ? (
          <FastImage style={styles.fastImage} source={{ uri: value }} />
        ) : (
          <View style={styles.defaultAvatarContainer}>
            <Icon
              name="image"
              color={color}
              size={size}
              style={styles.defaultAvatar}
            />
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
    </Container>
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

import React, { forwardRef, useState, useRef, cloneElement } from 'react'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'

const Upload = forwardRef((props, ref) => {
  const {
    children,
    imagePickerOptions,
    onUploaded,
    onPhotoRemove,
    ...rest
  } = props

  // [COMPONENT_STATE_HOOKS]
  const [isSpin, setIsSpin] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [isError, setError] = useState(false)
  const photoDialogActionSheet = useRef()

  const uploadRef = ref || photoDialogActionSheet

  // [CLEAN_FUNCTIONS]
  const openUpload = () => {
    uploadRef.current.show()
  }
  const startUpload = async (source) => {
    setIsSpin(true)
    try {
      setPhoto(source)
      await onUploaded?.(source)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(error)
    }

    setIsSpin(false)
  }

  const removePhoto = async () => {
    setIsSpin(true)
    try {
      setPhoto(null)
      await onPhotoRemove?.(null)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(error)
    }

    setIsSpin(false)
  }

  const onPhotoUploadDialogDone = (index) => {
    if (index === 0) {
      onLaunchCamera()
    }

    if (index === 1) {
      onOpenPhotos()
    }
    if (index === 2) {
      removePhoto()
    }
  }
  const onLaunchCamera = async () => {
    try {
      const image = await ImagePicker.openCamera(imagePickerOptions)
      await startUpload(image)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  const onOpenPhotos = async () => {
    try {
      const image = await ImagePicker.openPicker(imagePickerOptions)
      await startUpload(image)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  return (
    <>
      {typeof children === 'function'
        ? children?.({ openUpload, photo, isSpin, error: isError })
        : cloneElement(children, { openUpload, photo, isSpin, error: isError })}
      <ActionSheet
        ref={uploadRef}
        onPress={onPhotoUploadDialogDone}
        {...rest}
      />
    </>
  )
})

Upload.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  imagePickerOptions: PropTypes.object,
  onUploaded: PropTypes.func,
  onPhotoRemove: PropTypes.func,
  options: PropTypes.array
}

export default Upload

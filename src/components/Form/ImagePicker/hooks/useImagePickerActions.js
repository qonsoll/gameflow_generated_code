import LibPicker from 'react-native-image-crop-picker'

const useImagePickerActions = ({ cropping, onChange }) => {
  const onLaunchCamera = () => {
    LibPicker.openCamera({
      cropping: cropping || true
    })
      .then((image) => {
        updateUrl(image.path)
      })
      .catch((error) => console.error(error))
  }

  const onOpenPhotos = () => {
    LibPicker.openPicker({
      cropping: cropping || true
    })
      .then((image) => {
        updateUrl(image.path)
      })
      .catch((error) => console.error(error))
  }

  const updateUrl = (avatarUrl) => onChange && onChange(avatarUrl)

  const onPhotoUploadDialogs = [
    () => onLaunchCamera(),
    () => onOpenPhotos(),
    () => updateUrl(null)
  ]

  return { onPhotoUploadDialogs }
}

export default useImagePickerActions

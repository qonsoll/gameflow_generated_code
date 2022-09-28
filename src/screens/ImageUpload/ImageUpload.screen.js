import React, { useState } from 'react'

import { Container } from 'native-base'
import ImagePicker from '../../components/Form/ImagePicker/ImagePicker'
import { PageWrapper } from '~/components'
import { theme } from '~/styles'
import { useNavigation } from '@react-navigation/native'

const ImageUploadScreen = (props) => {
  const {
    route: {
      params: { form, fieldName, value = null }
    }
  } = props

  const [imageUrl, setImageUrl] = useState(value)

  const navigation = useNavigation()
  const handleDone = () => {
    form.setFieldsValue({ [fieldName]: imageUrl })
    navigation.goBack()
  }

  return (
    <PageWrapper
      title="Upload image"
      isContentScrollable
      leftButtonText="Back"
      leftButtonAction={() => navigation.goBack()}
      rightButtonText="Done"
      rightButtonAction={handleDone}>
      <Container>
        <ImagePicker
          value={imageUrl}
          onChange={setImageUrl}
          size={theme.COMPONENTS.Container.maxWidth}
          color={theme.COLORS['primary-default']}
        />
      </Container>
    </PageWrapper>
  )
}
export default ImageUploadScreen

import FastImage from 'react-native-fast-image'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { UserIcon } from '../../../../constants/assets'
import { View } from 'react-native'
import dynamicStyles from './styles'
import { useUserContext } from '~/contexts'

const UserSimpleView = () => {
  const { firstName, lastName, avatarUrl } = useUserContext()
  const styles = dynamicStyles(avatarUrl)

  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarContainer}>
        <FastImage
          source={avatarUrl ? { uri: avatarUrl } : UserIcon}
          style={styles.avatar}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text variant="h2" fontWeight="semibold">
          {firstName} {lastName}
        </Text>
      </View>
    </View>
  )
}

export default UserSimpleView

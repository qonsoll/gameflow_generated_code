import { Avatar } from '~/components'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { View } from 'react-native'
import dynamicStyles from './styles'
import { useUserContext } from '~/contexts'

const UserSimpleView = () => {
  const { firstName, lastName, avatarUrl, email, phone } = useUserContext()
  const styles = dynamicStyles(avatarUrl)

  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarContainer}>
        <Avatar size={100} url={avatarUrl} />
      </View>
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} variant="h2" fontWeight="semibold">
          {firstName} {lastName}
        </Text>

        <Text numberOfLines={1} variant="body1" color="grey-6">
          + {phone} ‧ {email}
        </Text>
      </View>
    </View>
  )
}

export default UserSimpleView

import { Avatar } from '~/components'
import { Heading } from 'native-base'
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
        <Heading numberOfLines={1} variant="h2" fontWeight="semibold">
          {firstName} {lastName}
        </Heading>

        <Text numberOfLines={1} color="text-caption-color">
          + {phone} ‧ {email}
        </Text>
      </View>
    </View>
  )
}

export default UserSimpleView

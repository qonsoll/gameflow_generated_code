import { Center, Container, HStack, Heading, Text } from 'native-base'
import React, { memo } from 'react'

import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import dynamicStyles from './SimpleViewLayout.styles'

/**
 * It takes in a title, date, and description, and returns a Flex component with a title, date, and
 * description
 * @param title - The title of the item
 * @param date - The date of the event
 * @param description - The description of the item.
 * @param imageUri - The image of the item.
 * @returns A function that takes in 4 arguments and returns a component
 */
const SimpleViewLayout = (props) => {
  const { title, date, description, imageUri } = props

  // [COMPUTED_PROPERTIES]
  const styles = dynamicStyles(title, imageUri)

  return (
    <Center>
      <Container minH={12} maxWidth={styles.container.maxWidth}>
        <HStack justifyContent="space-between" alignItems="center" mt={2}>
          <HStack justifyContent="space-between" w={styles.title.width}>
            <Heading size="sm">{title}</Heading>
            {!styles.title.isToBig && date && (
              <Text color="gray.500">{date}</Text>
            )}
          </HStack>
          <Icon
            name="chevron-right"
            size={styles.icon.size}
            color={styles.icon.color}
          />
        </HStack>
        <HStack alignItems="center" mb={2}>
          {imageUri && (
            <FastImage source={{ uri: imageUri }} style={styles.image} />
          )}
          {description && (
            <Text
              maxW={styles.description.maxWidth}
              numberOfLines={2}
              color="gray.500">
              {description}
            </Text>
          )}
        </HStack>
      </Container>
    </Center>
  )
}

SimpleViewLayout.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  imageUri: PropTypes.string
}

export default memo(SimpleViewLayout)

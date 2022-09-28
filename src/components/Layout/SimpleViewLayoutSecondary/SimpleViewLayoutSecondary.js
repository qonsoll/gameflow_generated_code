import { Container, Image, Text } from 'native-base'
import React, { memo } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import dynamicStyles from './SimpleViewLayoutSecondary.styles'

/**
 * It takes in a title, date, and description, and returns a Flex component with a title, date, and
 * description
 * @param title - The title of the item
 * @param date - The date of the event
 * @param description - The description of the item.
 * @param imageUri - The image of the item.
 * @returns A function that takes in 4 arguments and returns a component
 */
const SimpleViewLayoutSecondary = (props) => {
  const { title, date, description, imageUri, isLast } = props

  // [COMPUTED_PROPERTIES]
  const styles = dynamicStyles(title, imageUri, isLast)

  return (
    <Container style={styles.container}>
      {imageUri && (
        <Image
          mb={title || date ? 4 : 0}
          style={styles.image}
          alt="Image"
          source={{ uri: imageUri }}
        />
      )}
      <Container style={styles.textWrapper}>
        <View style={styles.titleWrapper}>
          {title && (
            <Text style={styles.title} variant="h5">
              {title}
            </Text>
          )}
          {date && (
            <View style={styles.dateWrapper}>
              <Icon style={styles.dateIcon} name="calendar-today" />
              <Text ml={1} style={styles.date}>
                {date}
              </Text>
            </View>
          )}
        </View>
        {description && (
          <Text style={styles.description} variant="subhead">
            {description}
          </Text>
        )}
      </Container>
    </Container>
  )
}

SimpleViewLayoutSecondary.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  imageUri: PropTypes.string
}

export default memo(SimpleViewLayoutSecondary)

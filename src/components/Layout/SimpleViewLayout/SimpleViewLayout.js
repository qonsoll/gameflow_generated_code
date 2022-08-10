import { Center, Container, Flex, Heading, Text } from 'native-base'
import React, { memo } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import theme from '../../../../theme'

/**
 * It takes in a title, date, and description, and returns a Flex component with a title, date, and
 * description
 * @param title - The title of the item
 * @param date - The date of the event
 * @param description - The description of the item.
 * @returns A function that takes in 3 arguments and returns a component
 */
const SimpleViewLayout = (props) => {
  const { title, date, description } = props

  const isTitleToBig = title.length > 30
  const iconSize = theme.COMPONENTS.ICON.iconSizes.sm

  return (
    <Center>
      <Container maxWidth={theme.COMPONENTS.CONTAINER.maxWidth}>
        <Flex
          minH={12}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          w="full">
          <Flex direction="row" w="95%" justifyContent="space-between">
            <Heading size="sm">{title}</Heading>
            {!isTitleToBig && date && <Text color="gray.400">{date}</Text>}
          </Flex>
          <Icon
            name="chevron-right"
            size={iconSize}
            color={theme.COMPONENTS.ICON.variants.grey.backgroundColor}
          />
        </Flex>
        {description && (
          <Text mb={2} numberOfLines={2} color="gray.400">
            {description}
          </Text>
        )}
      </Container>
    </Center>
  )
}

SimpleViewLayout.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default memo(SimpleViewLayout)

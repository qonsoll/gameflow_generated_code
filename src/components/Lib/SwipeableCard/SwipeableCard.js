import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import { Swipeable } from './components'
import { Text } from '@qonsoll/react-native-design'
import styles from './SwipeableCard.styles'
import { theme } from '~/styles'
import { useTranslations } from '@qonsoll/translation'

/**
 * It returns a Swipeable component with two buttons on the right side.
 * @param children - The content of the card.
 * @param onRemove - function to be called when the remove button is pressed
 * @param onEdit - function to be called when the edit button is pressed
 * @param onPress - This is the function that will be called when the user taps on the card.
 * @param style - The style of the card
 * @param activeOpacity - The opacity of the TouchableOpacity when pressed.
 * @returns A function that returns a component
 */
const SwipeableCard = (props) => {
  const { children, onRemove, onEdit, onPress, style, activeOpacity } = props
  const { t } = useTranslations()

  return (
    <Swipeable
      actionWidth="auto"
      rightActions={(onClose) => (
        <View style={styles.actionsWrapper}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              onEdit?.()
              onClose()
            }}>
            <Icon name="edit" size={24} color={theme.COLORS.white} />
            <Text color="white">{t('Edit')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              onRemove?.()
              onClose()
            }}>
            <Icon name="delete" size={24} color={theme.COLORS.white} />
            <Text color="white">{t('Delete')}</Text>
          </TouchableOpacity>
        </View>
      )}
      overshootRight={false}>
      <TouchableOpacity
        style={style}
        activeOpacity={activeOpacity || 1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </Swipeable>
  )
}

SwipeableCard.propTypes = {
  children: PropTypes.any,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  onPress: PropTypes.func,
  style: PropTypes.any,
  activeOpacity: PropTypes.number
}

export default SwipeableCard

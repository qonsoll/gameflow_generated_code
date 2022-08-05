import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import { Swipeable } from './components'
import { Text } from '@qonsoll/react-native-design'
import styles from './SwipeableCard.styles'
import theme from '../../../theme'
import { useTranslations } from '@qonsoll/translation'

/**
 * It returns a `Swipeable` component that has a `TouchableOpacity` component as its child. The
 * `TouchableOpacity` component has the `children` prop passed to the `SwipeableCard` component as its
 * child
 * @param props - The props that are passed to the component.
 * @returns A Swipeable component that has a rightActions prop that is a function that returns a View
 * component that has two TouchableOpacity components. The first TouchableOpacity component has an
 * onPress prop that calls the onEdit function and the onClose function. The second TouchableOpacity
 * component has an onPress prop that calls the onRemove function and the onClose function.
 */
const SwipeableCard = (props) => {
  const { children, onRemove, onEdit, onPress, style } = props
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
            <Icon name="edit" size={24} color={theme.CORE.COLORS.white} />
            <Text color="white">{t('Edit')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              onRemove?.()
              onClose()
            }}>
            <Icon name="delete" size={24} color={theme.CORE.COLORS.white} />
            <Text color="white">{t('Delete')}</Text>
          </TouchableOpacity>
        </View>
      )}
      overshootRight={false}>
      <TouchableOpacity style={style} activeOpacity={1} onPress={onPress}>
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
  style: PropTypes.any
}

export default SwipeableCard

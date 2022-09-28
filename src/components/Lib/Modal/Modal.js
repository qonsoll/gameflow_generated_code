import {
  LayoutAnimation,
  Modal,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useEffect } from 'react'

import { Heading } from 'native-base'
import dynamicStyles from './styles'

/**
 * It's a modal that takes in a title and children, and renders a modal with a header and a scrollable
 * body
 * @param isModalVisible - boolean
 * @param handleClose - This is the function that closes the modal.
 * @param title - The title of the modal
 * @param children - The content of the modal
 * @returns A modal component
 */
const MainModal = (props) => {
  const { isModalVisible, handleClose, title, children } = props
  const styles = dynamicStyles()
  useEffect(() => {
    LayoutAnimation.linear()
  }, [isModalVisible])

  return (
    <Fragment>
      {isModalVisible && <View style={styles.shadowContainer} />}
      <Modal
        onCancel={handleClose}
        animationType="slide"
        visible={isModalVisible}
        transparent={true}>
        <View style={styles.modalWrapper}>
          <TouchableOpacity
            onPressOut={handleClose}
            activeOpacity={1}
            style={styles.modalEmptyContainer}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader} />
            {title && <Heading mb={3}>{title}</Heading>}
            <ScrollView showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </Fragment>
  )
}

export default MainModal

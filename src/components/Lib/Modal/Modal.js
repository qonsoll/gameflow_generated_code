import { Box, Text, useTheme } from '@qonsoll/react-native-design'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal as NativeModal,
  Platform,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import Button from '../Button'
import { Close2x } from '~/__constants__/assets'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTranslations } from '@qonsoll/translation'

const CustomModal = (props) => {
  const {
    title,
    footer,
    children,
    animationType,
    cancelText,
    cancelButtonProps = {},
    okText,
    okType,
    okButtonProps = {},
    height,
    modalVisible = false,
    confirmLoading,
    onCancel,
    hideCancel,
    hideOk,
    onOk,
    isKeyboardAvoiding,
    withoutButtons,
    closable,
    wrapperStyles,
    ...rest
  } = props

  const { t } = useTranslations()
  const { theme } = useTheme()

  const insets = useSafeAreaInsets()
  const styles = dynamicStyles(insets, height, theme)

  // TODO make possible to correctly close modal on swipe
  // const panResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onMoveShouldSetPanResponder: () => true,
  //   onPanResponderRelease: (evt, gestureState) => {
  //     gestureState.dy > 0 && onCancel?.()
  //   }
  // })

  const modalContent = (
    <>
      {!!title && (
        <Text variant="h3" mb={32}>
          {title}
        </Text>
      )}

      {closable && (
        <TouchableOpacity onPress={onCancel} style={styles.main.modal}>
          <Image style={styles.main.modalImage} source={Close2x} />
        </TouchableOpacity>
      )}

      <View style={styles.modalChildrenContainer}>{children}</View>
      {!withoutButtons && (
        <Box flexDirection="row">
          {footer || (
            <>
              {!hideCancel && (
                <Button mr={8} block onPress={onCancel} {...cancelButtonProps}>
                  {cancelText || t('Cancel')}
                </Button>
              )}

              {!hideOk && (
                <Button
                  variant="primary"
                  block
                  onPress={onOk}
                  loading={confirmLoading}
                  {...okButtonProps}>
                  {okText || t('Save')}
                </Button>
              )}
            </>
          )}
        </Box>
      )}
    </>
  )

  if (isKeyboardAvoiding) {
    const modalWrapper = (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}>
        <View style={styles.keyboardAvoidingViewStyles.modalMainViewContainer}>
          {modalContent}
        </View>
      </TouchableWithoutFeedback>
    )
    return (
      <NativeModal
        animationType={animationType || 'fade'}
        visible={modalVisible}
        transparent={true}
        onRequestClose={onCancel}
        {...rest}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={onCancel}
          style={styles.keyboardAvoidingViewStyles.touchableStyles}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingViewStyles.main}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {height === '100%' ? (
              <ScrollView style={styles.main.scroll}>{modalWrapper}</ScrollView>
            ) : (
              modalWrapper
            )}
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </NativeModal>
    )
  }

  const modalWrapper = (
    <TouchableWithoutFeedback>
      <View style={[styles.modalMainViewContainer, wrapperStyles]}>
        <Box justifyContent="space-between" flex={1}>
          {modalContent}
        </Box>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <Modal
      hideModalContentWhileAnimating
      useNativeDriver
      animationType={animationType || 'fade'}
      isVisible={modalVisible}
      style={styles.modalStyles}
      {...rest}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={onCancel}
        style={styles.touchableStyles}>
        {height === '100%' ? (
          <ScrollView style={styles.main.scroll}>{modalWrapper}</ScrollView>
        ) : (
          modalWrapper
        )}
      </TouchableOpacity>
    </Modal>
  )
}

CustomModal.propTypes = {
  title: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
  cancelText: PropTypes.string,
  cancelButtonProps: PropTypes.object,
  okText: PropTypes.string,
  okType: PropTypes.string,
  okButtonProps: PropTypes.object,
  height: PropTypes.string, // sm(30%), md(40%), lg(50%) or height in %
  modalVisible: PropTypes.bool.isRequired,
  confirmLoading: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  hideCancel: PropTypes.bool,
  hideOk: PropTypes.bool,
  isKeyboardAvoiding: PropTypes.bool
}

export default CustomModal

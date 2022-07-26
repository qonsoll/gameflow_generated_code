import React, { useState } from 'react'

import Button from '../Button'
import Modal from '../Modal'
import PropTypes from 'prop-types'
import { Text } from '@qonsoll/react-native-design'
import { useTranslations } from '@qonsoll/translation'

const DEFAULT_PROPS = {
  question: 'Are you sure you want to remove',
  confirmLabel: 'Yes, remove',
  cancelLabel: 'No, keep',
  itemName: 'it'
}
const Remove = (props) => {
  const {
    icon,
    itemName,
    question,
    confirmLabel,
    cancelLabel,
    disabled,
    onSubmit,
    onCancel,
    onPress,
    children,
    ...rest
  } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()

  // [COMPONENT_STATE_HOOKS]
  const [isConfirmShow, setIsConfirmShow] = useState(false)

  // [CLEAN_FUNCTIONS]
  const showConfirm = () => {
    onPress?.()
    setIsConfirmShow(true)
  }
  const onCancelClick = () => {
    onCancel?.()
    setIsConfirmShow(false)
  }
  const onOk = () => {
    setIsConfirmShow(false)
    onSubmit?.()
  }
  return (
    <>
      <Button
        onPress={showConfirm}
        variant="danger"
        iconSize={24}
        children={children}
        disabled={disabled}
        {...rest}
      />
      <Modal
        height="sm"
        modalVisible={isConfirmShow}
        title={`${t('Remove')} ${itemName || t(DEFAULT_PROPS.itemName)}`}
        okText={confirmLabel || DEFAULT_PROPS.confirmLabel}
        okButtonProps={{ variant: 'danger' }}
        cancelText={cancelLabel || DEFAULT_PROPS.cancelLabel}
        onCancel={onCancelClick}
        onOk={onOk}>
        <Text variant="body1">
          <Text variant="body1">{question || DEFAULT_PROPS.question} </Text>
          {
            <Text fontWeight="semibold" variant="body1">
              {itemName || DEFAULT_PROPS.itemName}
            </Text>
          }
          ?
        </Text>
      </Modal>
    </>
  )
}

Remove.propTypes = {
  icon: PropTypes.bool,
  itemName: PropTypes.string,
  question: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  shape: PropTypes.oneOfType([PropTypes.oneOf(['square']), PropTypes.bool]),
  block: PropTypes.bool,
  iconSize: PropTypes.number
}

export default Remove

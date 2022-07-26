import React, { useCallback, useMemo, useState } from 'react'

import Input from '../Inputs'
import Modal from '../Modal'
import { Picker } from '@react-native-picker/picker'
import PropTypes from 'prop-types'
import { useTheme } from '@qonsoll/react-native-design'
import { useTranslations } from '@qonsoll/translation'

/**
 * It renders an input that opens a modal with a picker
 * @param props - The props passed to the component.
 * @returns A component that renders a modal with a picker inside.
 */
const Select = (props) => {
  const {
    items,
    style,
    children,
    value,
    onChange,
    modalProps,
    emptyLabel,
    disabled,
    ...rest
  } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()
  const { theme } = useTheme()
  // [COMPONENT_STATE_HOOKS]
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(
    !disabled && items.find((item) => item.value === value)
  )

  // [CLEAN_FUNCTIONS]
  const showModal = useCallback(() => {
    setIsModalVisible(true)
    setSelectedValue(items.find((item) => item.value === value) || items[0])
  }, [items, value])
  const hideModal = () => setIsModalVisible(false)
  const submitSelect = () => {
    setIsModalVisible(false)
    onChange?.(selectedValue?.value)
  }
  const onSelect = (_value) =>
    setSelectedValue(items.find((item) => item.value === _value))

  // [COMPUTED_PROPERTIES]
  const inputValue = useMemo(() => {
    const v = !disabled && items.find((item) => item.value === value)
    return v?.inputLabel || v?.label
  }, [disabled, items, value])

  const placeholder = props.placeholder?.label || props.placeholder
  return (
    <>
      {children ? (
        children(showModal)
      ) : (
        <Input
          value={inputValue}
          onPress={!disabled ? showModal : undefined}
          onPressIn={!disabled ? showModal : undefined}
          placeholder={placeholder}
          // imageRight={<ArrowDownSecondary height={24} width={24} />}
          iconSize={24}
          style={style}
          editable={false}
          disabled={disabled}
          {...rest}
        />
      )}
      <Modal
        title={placeholder}
        modalVisible={isModalVisible}
        hideCancel
        {...modalProps}
        onCancel={hideModal}
        onOk={submitSelect}>
        <Picker
          selectedValue={selectedValue?.value}
          onValueChange={onSelect}
          itemStyle={
            !items?.length && {
              color: theme.CORE.COLORS['grey-7'],
              fontWeight: theme.CORE.FONT_WEIGHTS.semibold
            }
          }>
          {items?.length ? (
            items.map((item) => <Picker.Item {...item} key={item.value} />)
          ) : (
            <Picker.Item
              value={null}
              label={emptyLabel || t('No items')}
              key={emptyLabel || 'No data'}
            />
          )}
        </Picker>
      </Modal>
    </>
  )
}

Select.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ),
  modalProps: PropTypes.object,
  emptyLabel: PropTypes.string,
  disabled: PropTypes.bool
}

export default Select

import React from 'react'
import { useTheme } from '@qonsoll/react-native-design'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'

const CheckBox = (props) => {
  const { value, onChange } = props

  //[ADDITIONAL_HOOKS]
  const { theme } = useTheme()

  //[COMPUTED_PROPERTIES]
  const styles = dynamicStyles(theme, props)

  //[CLEAN_FUNCTIONS]
  const onCheckboxPress = () => {
    onChange?.(!value)
  }

  return (
    <TouchableOpacity onPress={onCheckboxPress} style={styles.wrapperStyles} />
  )
}

export default CheckBox

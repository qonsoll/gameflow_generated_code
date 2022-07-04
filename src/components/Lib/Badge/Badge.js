import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import PropTypes from 'prop-types'

const Badge = (props) => {
  const { checked } = props

  //[ADDITIONAL HOOKS]
  const { theme } = useTheme()

  //[COMPUTED PROPERTIES]
  const styles = dynamicStyles(theme, checked)

  return (
    <View style={styles.badgeMainWrapper}>
      <View style={styles.badge} />
    </View>
  )
}

Badge.propTypes = { checked: PropTypes.bool }

export default Badge

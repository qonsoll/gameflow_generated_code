import Back from '../Back'
import { Language } from '../../Lib'
import Logo from '../Logo'
import React from 'react'
import { View } from 'react-native'
import dynamicStyles from './styles'

/**
 * It renders a header with a back button, a logo, and a language selector
 * @param props - The props that are passed to the component.
 * @returns A view with a back button, logo, and language button.
 */
const AuthHeader = (props) => {
  const { onBack } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  return (
    <View style={styles.headerContainer}>
      {/* Back */}
      {onBack && <Back onBack={onBack} />}
      {/* Logo */}
      <Logo style={styles.logo} />
      {/* Language */}
      <Language style={styles.language} />
    </View>
  )
}

export default AuthHeader

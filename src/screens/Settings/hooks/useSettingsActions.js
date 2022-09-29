import {
  DASHBOARD_SCREEN,
  LANGUAGES_ALL_SCREEN,
  PROFILE_SCREEN
} from '~/__constants__/screens'

import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const useSettingsActions = () => {
  const navigation = useNavigation()

  const onContactUs = () => {}
  const onTermsAndPrivacy = () => {}
  const onLogOut = () => auth().signOut()
  const onProfile = () => navigation.navigate(PROFILE_SCREEN)
  const onDashboard = () => () => navigation.navigate(DASHBOARD_SCREEN)
  const onLanguages = () => navigation.navigate(LANGUAGES_ALL_SCREEN)

  return {
    onContactUs,
    onTermsAndPrivacy,
    onLogOut,
    onProfile,
    onDashboard,
    onLanguages
  }
}

export default useSettingsActions

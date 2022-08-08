import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import {
  PROFILE_SCREEN,
  DASHBOARD_SCREEN,
  LANGUAGES_ALL
} from '~/__constants__/screens'

const useSettingsActions = () => {
  const navigation = useNavigation()

  const onContactUs = () => {}
  const onTermsAndPrivacy = () => {}
  const onLogOut = () => auth().signOut()
  const onProfile = () => navigation.navigate(PROFILE_SCREEN)
  const onDashboard = () => () => navigation.navigate(DASHBOARD_SCREEN)
  const onLanguages = () => navigation.navigate(LANGUAGES_ALL)

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
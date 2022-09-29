import { useTranslations } from '@qonsoll/translation'
import { useNavigation } from '@react-navigation/native'
import { theme } from '~/styles'
import {
  COMPETITION_TEAMS_SHOW_SCREEN,
  COMPETITION_MATCHES_SHOW_SCREEN,
  COMPETITION_VIDEO_GAME_SHOW_SCREEN
} from '~/__constants__/screens'

const useAdvancedViewItems = (props) => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  const items = [
    {
      text: t('Participants'),
      icon: 'info',
      iconBackgroundColor: theme.COLORS['primary-default'],
      action: () => navigation.navigate(COMPETITION_TEAMS_SHOW_SCREEN, props),
      isArrowShow: true,
      textColor: 'grey-4'
    },
    {
      text: t('Matches'),
      icon: 'info',
      iconBackgroundColor: theme.COLORS['info-default'],
      action: () => navigation.navigate(COMPETITION_MATCHES_SHOW_SCREEN, props),
      isArrowShow: true,
      textColor: 'grey-4'
    },
    {
      text: t('Video game'),
      icon: 'info',
      iconBackgroundColor: theme.COLORS['warning-default'],
      action: () =>
        navigation.navigate(COMPETITION_VIDEO_GAME_SHOW_SCREEN, props),
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  return items
}

export default useAdvancedViewItems

import { useTranslations } from '@qonsoll/translation'
import { useNavigation } from '@react-navigation/native'
import { theme } from '~/styles'
import { MATCH_TEAMS_SHOW_SCREEN } from '~/__constants__/screens'

const useAdvancedViewItems = (props) => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  const items = [
    {
      text: t('Teams'),
      icon: 'info',
      iconBackgroundColor: theme.COLORS['primary-default'],
      action: () => navigation.navigate(MATCH_TEAMS_SHOW_SCREEN, props),
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  return items
}

export default useAdvancedViewItems

import { LANGUAGES } from '../../../__constants__'
import { theme } from '~/styles'
import useSettingsActions from './useSettingsActions'
import { useTranslations } from '@qonsoll/translation'

const useSettingsItems = () => {
  const { t, language } = useTranslations()
  const {
    onContactUs,
    onTermsAndPrivacy,
    onLogOut,
    onLanguages
  } = useSettingsActions()

  const SETTINGS_ITEMS = [
    {
      icon: 'language',
      text: t('settings-language-item-name'),
      iconBackgroundColor: theme.COLORS['primary-default'],
      action: onLanguages,
      isArrowShow: true,
      textColor: 'grey-4',
      description: LANGUAGES[language]
    },
    {
      icon: 'email',
      text: t('settings-contact-us-item-name'),
      iconBackgroundColor: theme.COLORS['info-default'],
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    {
      icon: 'shield',
      text: t('settings-terms-and-privacy-item-name'),
      iconBackgroundColor: theme.COLORS['warning-default'],
      action: onTermsAndPrivacy,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  const EXTRA_ACTIONS = [
    {
      icon: 'logout',
      text: t('settings-log-out-item-name'),
      iconBackgroundColor: theme.COLORS['danger-default'],
      action: onLogOut,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  return { SETTINGS_ITEMS, EXTRA_ACTIONS }
}

export default useSettingsItems

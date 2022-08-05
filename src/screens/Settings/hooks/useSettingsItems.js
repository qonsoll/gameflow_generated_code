import { useTranslations } from '@qonsoll/translation'
import theme from '../../../../theme'
import { LANGUAGES } from '../../../__constants__'
import useSettingsActions from './useSettingsActions'

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
      iconBackgroundColor: theme.CORE.COLORS['primary-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onLanguages,
      isArrowShow: true,
      textColor: 'grey-4',
      description: LANGUAGES[language]
    },
    {
      icon: 'email',
      text: t('settings-contact-us-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['info-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onContactUs,
      isArrowShow: true,
      textColor: 'grey-4'
    },
    {
      icon: 'shield',
      text: t('settings-terms-and-privacy-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['warning-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor,
      action: onTermsAndPrivacy,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  const EXTRA_ACTIONS = [
    {
      icon: 'logout',
      text: t('settings-log-out-item-name'),
      iconBackgroundColor: theme.CORE.COLORS['danger-default'],
      arrowColor: theme.COMPONENTS.ICON.variants.lightDanger.backgroundColor,
      action: onLogOut,
      isArrowShow: true,
      textColor: 'grey-4'
    }
  ]

  return { SETTINGS_ITEMS, EXTRA_ACTIONS }
}

export default useSettingsItems

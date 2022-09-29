import { useTranslations } from '@qonsoll/translation'
import { useNavigation } from '@react-navigation/native'
import { theme } from '~/styles'
import {} from '~/__constants__/screens'

const useAdvancedViewItems = (props) => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  const items = []

  return items
}

export default useAdvancedViewItems

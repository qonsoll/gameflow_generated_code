import { NativeModules, Platform } from 'react-native'
import Provider, { TranslationContext } from '@qonsoll/translation'

import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { ScreenLoading } from '../components'
import database from '@react-native-firebase/database'

const CURRENT_APP = 'react-native-boilerplate'
const DEFAULT_LANGUAGE = 'no'
const LANGUAGES = [
  { name: 'English', shortCode: 'en' },
  { name: 'Norsk', shortCode: 'no' },
  { name: 'Ukraine', shortCode: 'uk' }
]

const TranslationProvider = (props) => {
  const { children, ...rest } = props

  let locale

  if (Platform.OS === 'ios') {
    // IOS:
    const deviceLocale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // "fr_FR"
    if (deviceLocale?.split('_')?.[0] === 'nb') {
      locale = 'no'
    } else {
      locale = 'en'
    }
  } else {
    // Android:
    const deviceLocale = NativeModules.I18nManager.localeIdentifier // "fr_FR"
    if (deviceLocale?.split('_')?.[0] === 'nb') {
      locale = 'no'
    } else {
      locale = 'en'
    }
  }

  return (
    <Provider
      storage={AsyncStorage}
      db={database()}
      languages={LANGUAGES}
      defaultLanguage={locale || DEFAULT_LANGUAGE}
      currentApp={CURRENT_APP}
      {...rest}>
      <TranslationContext.Consumer>
        {({ loaded }) =>
          loaded ? children : <ScreenLoading text="Translation is loading" />
        }
      </TranslationContext.Consumer>
    </Provider>
  )
}

export default TranslationProvider

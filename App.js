import 'moment/locale/nb'

import { AppStackNavigator, AuthStackNavigator } from './src/navigators'
import { NativeBaseProvider, extendTheme } from 'native-base'
import React, { useEffect } from 'react'
import { UserAuthContext, UserAuthProvider, UserProvider } from './src/contexts'
import { nativeBaseTheme, theme } from './src/styles/theme'

import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation'
import { Root } from 'react-native-alert-notification'
import { ThemeProvider } from '@qonsoll/react-native-design'
import TranslationProvider from './src/contexts/TranslationContext'

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])
  const nativeBaseThemeExtended = extendTheme(nativeBaseTheme)

  return (
    <Root>
      <NativeBaseProvider theme={nativeBaseThemeExtended}>
        <AppearanceProvider>
          <ThemeProvider theme={theme}>
            <TranslationProvider>
              <UserAuthProvider>
                <NavigationContainer>
                  <UserAuthContext.Consumer>
                    {({ _isUserAuthExists }) =>
                      _isUserAuthExists ? (
                        <UserProvider>
                          <AppStackNavigator />
                        </UserProvider>
                      ) : (
                        <AuthStackNavigator />
                      )
                    }
                  </UserAuthContext.Consumer>
                </NavigationContainer>
              </UserAuthProvider>
            </TranslationProvider>
          </ThemeProvider>
        </AppearanceProvider>
      </NativeBaseProvider>
    </Root>
  )
}

export default App

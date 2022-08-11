import 'moment/locale/nb'

import { AppStackNavigator, AuthStackNavigator } from './src/navigators'
import { NativeBaseProvider, extendTheme } from 'native-base'
import React, { useEffect } from 'react'
import { UserAuthContext, UserAuthProvider, UserProvider } from './src/contexts'

import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation'
import { Root } from 'react-native-alert-notification'
/* Importing the navigators from the navigators folder. */
import { ThemeProvider } from '@qonsoll/react-native-design'
import TranslationProvider from './src/contexts/TranslationContext'
import theme from './theme'

const App = () => {
  // [USE_EFFECTS]
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])
  const nativeBaseTheme = extendTheme(theme.NATIVE_BASE)

  return (
    <Root>
      <NativeBaseProvider theme={nativeBaseTheme}>
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

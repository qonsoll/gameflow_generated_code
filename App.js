import 'moment/locale/nb'

import { AppStackNavigator, AuthStackNavigator } from './src/navigators'
import React, { useEffect } from 'react'
import { UserAuthContext, UserAuthProvider, UserProvider } from './src/contexts'

import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation'
import { ThemeProvider } from '@qonsoll/react-native-design'
import TranslationProvider from './src/contexts/TranslationContext'
import theme from './theme'

const App = () => {
  // [USE_EFFECTS]
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])

  return (
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
  )
}

export default App

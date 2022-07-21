import 'moment/locale/nb'

import { AppStackNavigator, AuthStackNavigator } from './src/navigators'
import { UserAuthContext, UserAuthProvider, UserProvider } from './src/contexts'

import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import Orientation from 'react-native-orientation'
import React from 'react'
/* Importing the navigators from the navigators folder. */
import { ThemeProvider } from '@qonsoll/react-native-design'
import TranslationProvider from './src/contexts/TranslationContext'
import theme from './theme'

Orientation.lockToPortrait()

const App = () => {
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

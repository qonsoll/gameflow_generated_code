import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'

import PropTypes from 'prop-types'
import { ScreenLoading } from '../components'
import auth from '@react-native-firebase/auth'

const UserAuthContext = createContext()
const UserAuthDispatchContext = createContext()

function userAuthReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        ...action.data,
        _isUserAuthExists: Boolean(action.data)
      }
    }
    case 'INIT_ONE_SIGNAL_DEVICE_START': {
      return { ...state, initializeOneSignalDeviceId: true }
    }
    case 'INIT_ONE_SIGNAL_DEVICE_END': {
      delete state.initializeOneSignalDeviceId
      return state
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserAuthProvider({ children }) {
  const [userAuthData, dispatch] = useReducer(userAuthReducer, {})
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    let isComponentMounted = true
    let unsubscribeFromUserAuthData = null

    if (isComponentMounted) {
      // Handle user state changes
      function onAuthStateChanged(user) {
        if (isComponentMounted) {
          dispatch({ type: 'SET_DATA', data: user })

          if (initializing) {
            setInitializing(false)
          }
        }
      }

      unsubscribeFromUserAuthData = auth().onAuthStateChanged(
        onAuthStateChanged
      )
    }

    setInitializing(false)
    return () => {
      unsubscribeFromUserAuthData?.()

      isComponentMounted = false
    }
  }, [initializing])

  return (
    <UserAuthContext.Provider
      value={{
        ...userAuthData,
        _isUserAuthLoading: initializing
      }}>
      <UserAuthDispatchContext.Provider value={dispatch}>
        {initializing ? <ScreenLoading text="User is authorizing" /> : children}
      </UserAuthDispatchContext.Provider>
    </UserAuthContext.Provider>
  )
}
function useUserAuthContext() {
  const context = useContext(UserAuthContext)

  if (context === undefined) {
    throw new Error(
      'useUserAuthState must be used within a UserAuthContext.Provider'
    )
  }

  return context
}
function useUserAuthDispatch() {
  const context = useContext(UserAuthDispatchContext)

  if (context === undefined) {
    throw new Error(
      'useUserAuthDispatch must be used within a UserAuthContext.Provider'
    )
  }

  return context
}
function useUserAuth() {
  return [useUserAuthContext(), useUserAuthDispatch()]
}

UserAuthProvider.propTypes = {
  children: PropTypes.element
}

export {
  UserAuthContext,
  UserAuthProvider,
  useUserAuthContext,
  useUserAuthDispatch,
  useUserAuth
}

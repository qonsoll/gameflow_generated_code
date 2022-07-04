import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import React, { createContext, useContext, useEffect, useReducer } from 'react'

import PropTypes from 'prop-types'
import { ScreenLoading } from '../components'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useUserAuthContext } from './UserAuthContext'

const UserContext = createContext()
const UserDispatchContext = createContext()

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...action.data,
        _isUserFetching: false,
        _isUserExists: Boolean(action.data)
      }
    }
    case 'UPDATE_DATA': {
      return Object.assign({ ...state }, action?.data)
    }
    case 'START_DATA_FETCHING': {
      return { ...state, _isUserFetching: true, _isUserExists: false }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }) {
  // [ADDITIONAL_HOOKS]
  const { _isUserAuthExists, _user } = useUserAuthContext()

  // [COMPONENT_STATE_HOOKS]
  const [userData, dispatch] = useReducer(userReducer, {
    _isUserFetching: false,
    _isUserExists: false
  })

  // [COMPUTED_PROPERTIES]
  const userId = _user?.uid

  // [USE_EFFECTS]
  useEffect(() => {
    let isComponentMounted = true
    let unsubscribeFromUser = null

    if (isComponentMounted && _isUserAuthExists && userId) {
      dispatch({ type: 'START_DATA_FETCHING' })

      unsubscribeFromUser = firestore()
        .collection('users')
        .doc(userId)
        .onSnapshot(async (doc) => {
          const fetchedUserData = doc.exists && doc.data()

          if (!doc.exists || !fetchedUserData) {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: "Can't login",
              textBody: "You don't have permissions"
            })
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
            dispatch({ type: 'SET_DATA', data: false })
          } else {
            firestore()
              .collection('users')
              .doc(userId)
              .get()
              .then(({ _data }) =>
                dispatch({
                  type: 'SET_DATA',
                  data: { ..._data }
                })
              )
          }
        })
    }

    return () => {
      unsubscribeFromUser?.()

      isComponentMounted = false
    }
  }, [_isUserAuthExists, userId])

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={{ ...userData }}>
        {!_isUserAuthExists || userData?._isUserExists ? (
          children
        ) : (
          <ScreenLoading text="User is loading" />
        )}
      </UserContext.Provider>
    </UserDispatchContext.Provider>
  )
}
function useUserContext() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserContext.Provider')
  }

  return context
}
function useUserDispatch() {
  const context = useContext(UserDispatchContext)

  if (context === undefined) {
    throw new Error(
      'useUserDispatch must be used within a UserContext.Provider'
    )
  }

  return context
}
function useUser() {
  return [useUserContext(), useUserDispatch()]
}

UserProvider.propTypes = {
  children: PropTypes.element
}

export { UserContext, UserProvider, useUserContext, useUserDispatch, useUser }

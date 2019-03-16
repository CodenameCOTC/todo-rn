import { Reducer } from 'redux'
import { AuthState, AuthActionTypes } from '../types'

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: {},
}

const authReducer: Reducer = (
  state: AuthState = initialState,
  action
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: {},
      }

    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        error: {},
      }

    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default authReducer

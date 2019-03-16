import { action } from 'typesafe-actions'
import { ILoginData, AuthActionTypes, UserType, AuthErrorType } from '../types'

export const requestLogin = (data: ILoginData) =>
  action(AuthActionTypes.LOGIN_REQUEST, data)

export const requestLoginSuccess = (user: UserType) =>
  action(AuthActionTypes.LOGIN_SUCCESS, user)

export const requestLoginFailure = (error: AuthErrorType) =>
  action(AuthActionTypes.LOGIN_FAILURE, error)

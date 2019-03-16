export type UserType = {
  id?: string
  username?: string
  iat?: number
  exp?: number
}

export type AuthErrorType = {
  username?: string
  password?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: UserType
  isLoading: boolean
  error: AuthErrorType
}

export interface ILoginSuccesResponse {
  success: boolean
  bearer: string
}

export interface ILoginData {
  userData: {
    username: string
    password: string
  }
}

export const enum AuthActionTypes {
  LOGIN_REQUEST = '@@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@@auth/LOGIN_FAILURE',
}

export type UserType = {
  id?: string
  username?: string
  iat?: number
  exp?: number
}

export type AuthErrorType = {
  username?: string
  password?: string
  message?: string
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
  username: string
  password: string
}

export enum AuthActionTypes {
  LOGIN_REQUEST = '@@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@@auth/LOGIN_FAILURE',
  SET_CURRENT_USER = '@@auth/SET_CURRENT_USER',
  REGISTER_REQUEST = '@@auth/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@auth/REGISTER_FAILURE',
}

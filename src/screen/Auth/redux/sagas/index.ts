import { all, put, takeEvery, call, fork } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'

import { AuthActionTypes, ILoginData } from '../types'
import * as actions from '../actions'
import { requestLogin } from '../network'
import { request } from '../../../../constants'
import { HomeNavigation } from '../../../../navigation'

interface IAction {
  type: string
  payload: ILoginData
}

export function* requestLoginApi(action: IAction) {
  try {
    const res = yield call(requestLogin, action.payload)
    if (res.error) {
      return yield put(actions.requestLoginFailure(res.error))
    }
    yield call(AsyncStorage.setItem, 'jwt', res.token)
    request.defaults.headers['Authorization'] = res.token
    const decoded = jwt_decode(res.token)
    yield put(actions.requestLoginSuccess(decoded))
    yield call(HomeNavigation)
  } catch (err) {
    const error = {
      message: 'Unknown error occurs',
    }
    yield put(actions.requestLoginFailure(error))
  }
}

function* watchRequest() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, requestLoginApi)
}

export default function* AuthSagas() {
  yield all([fork(watchRequest)])
}

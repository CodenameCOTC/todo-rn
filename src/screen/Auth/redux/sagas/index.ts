import { all, put, takeEvery, call, fork } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'
import { AuthActionTypes, ILoginData } from '../types'
import * as actions from '../actions'
import { requestLogin } from '../network'

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
    const token = yield call(AsyncStorage.getItem, 'jwt')
    console.log({ token })
    const decoded = jwt_decode(res.token)
    yield put(actions.requestLoginSuccess(decoded))
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

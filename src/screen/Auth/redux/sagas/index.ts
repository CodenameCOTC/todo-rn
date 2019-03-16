import { all, put, takeEvery, call, fork } from 'redux-saga/effects'
import { AuthActionTypes, ILoginData } from '../types'
import * as actions from '../actions'
import { requestLogin } from '../network'

interface IAction {
  type: string
  data: ILoginData
}

export function* requestLoginApi(action: IAction) {
  try {
    const res = yield call(requestLogin, action.data)
    yield put(actions.requestLoginSuccess(res))
    console.log(res)
  } catch (error) {
    yield put(actions.requestLoginFailure(error))
  }
}

function* watchRequest() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, requestLoginApi)
}

export default function* AuthSagas() {
  yield all([fork(watchRequest)])
}

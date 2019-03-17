import { call, put, all, fork, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import { requestTodos } from '../network'

export function* requestTodosApi() {
  try {
    const res = yield call(requestTodos)
    if (res.error) {
      return yield put(actions.requestTodoFailure(res.error))
    }
    yield put(actions.requestTodosSuccess(res))
  } catch (error) {
    yield put(
      actions.requestTodoFailure({
        message: 'Unkown error occured, please try again.',
      })
    )
  }
}

export function* watchRequestTodos() {
  yield takeEvery(actions.requestTodos, requestTodosApi)
}

export default function* TodosSagas() {
  yield all([fork(watchRequestTodos)])
}

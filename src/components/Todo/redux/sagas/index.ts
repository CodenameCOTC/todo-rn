import { call, put, all, fork, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import { TodosActionTypes } from '../types'
import { requestTodos } from '../network'

export function* requestTodosApi() {
  try {
    const res = yield call(requestTodos)
    if (res.error) {
      yield put(actions.requestTodoFailure(res.error))
    }
    yield put(actions.requestTodosSuccess(res))
  } catch (error) {
    yield put(
      actions.requestTodoFailure({
        message: 'Unkown error occurred, please try again.',
      })
    )
  }
}

export function* watchRequestTodos() {
  yield takeEvery(TodosActionTypes.REQUEST_TODOS, requestTodosApi)
}

export default function* todosRootSagas() {
  yield all([fork(watchRequestTodos)])
}

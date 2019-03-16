import {
  combineReducers,
  Dispatch,
  Action,
  AnyAction,
  createStore,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'

import { AuthState } from '../screen/Auth/redux/types'
import authRootSagas from '../screen/Auth/redux/sagas'
import authReducer from '../screen/Auth/redux/reducer'

export interface ApplicationState {
  auth: AuthState
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch?: Dispatch<A>
}

export const rootReducer = combineReducers({
  auth: authReducer,
})

export function* rootSaga() {
  yield all([fork(authRootSagas)])
}

const sagaMiddleware = createSagaMiddleware()

const reduxMiddleware = applyMiddleware(sagaMiddleware)

function* rootSagas() {
  yield all([fork(authRootSagas)])
}

const store = createStore(rootReducer, composeWithDevTools(reduxMiddleware))

sagaMiddleware.run(rootSagas)

export default store

import { ITodoItemState, TodosActionTypes } from '../types'

const initialState: ITodoItemState = {
  todo: [],
  isLoading: false,
  error: {},
  isEmpty: false,
}

const todoReducer = (state = initialState, action: any): ITodoItemState => {
  switch (action.type) {
    case TodosActionTypes.REQUEST_TODOS:
      return {
        ...state,
        isLoading: true,
        error: {},
        isEmpty: false,
      }

    case TodosActionTypes.REQUEST_TODOS_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        isLoading: false,
        error: {},
        isEmpty: action.payload.length === 0,
      }

    case TodosActionTypes.REQUEST_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default todoReducer

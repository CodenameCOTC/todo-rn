export interface ITodoItem {
  description: string
  createdDate: string
  isFinish: boolean
  finishDate: string
  _id: string
  title: string
  deadline: string
  createdBy: string
  __v: number
}

export interface ITodoItems extends Array<ITodoItem> {}

export interface IErrorTodo {
  message?: string
}

export interface ITodoItemState {
  todo: ITodoItems
  isLoading: boolean
  error: IErrorTodo
  isEmpty: boolean
}

export interface ITodoState {
  todos: ITodoItemState
}

export enum TodosActionTypes {
  REQUEST_TODOS = '@@todos/REQUEST_TODO',
  REQUEST_TODOS_SUCCESS = '@@todos/REQUEST_TODO_SUCCESS',
  REQUEST_TODOS_FAILURE = '@@todos/REQUEST_TODO_FAILURE',
}

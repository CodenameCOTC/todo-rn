import { action } from 'typesafe-actions'
import { TodosActionTypes, ITodoItem, IErrorTodo } from '../types'

export const requestTodos = () => action(TodosActionTypes.REQUEST_TODOS)

export const requestTodosSuccess = (todos: ITodoItem) =>
  action(TodosActionTypes.REQUEST_TODOS_SUCCESS, todos)

export const requestTodoFailure = (error: IErrorTodo) =>
  action(TodosActionTypes.REQUEST_TODOS_FAILURE, error)

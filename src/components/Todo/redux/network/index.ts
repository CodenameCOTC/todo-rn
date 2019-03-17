import { request } from '../../../../constants'

export const requestTodos = async () => {
  try {
    const res = await request.get('/todo')
    const { data } = res.data
    return data
  } catch (error) {
    if (error.response.data) {
      return error.response.data
    } else {
      return {
        error: {
          message: 'Unknown error occurred, please try again.',
        },
      }
    }
  }
}

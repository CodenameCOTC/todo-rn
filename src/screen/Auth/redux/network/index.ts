import { ILoginData, ILoginSuccesResponse } from '../types'
import { request } from '../../../../constants'

export const requestLogin = async (loginData: ILoginData): Promise<any> => {
  try {
    console.log(loginData)
    const res = await request.post('/users/login', loginData)
    const { data }: { data: ILoginSuccesResponse } = res
    return data
  } catch (error) {
    if (error.response.data.error) {
      return { error: error.response.data.error }
    }
    throw error
  }
}

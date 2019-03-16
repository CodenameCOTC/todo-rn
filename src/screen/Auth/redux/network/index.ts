import { ILoginData, ILoginSuccesResponse } from '../types'
import { request } from '../../../../constants'

export const requestLogin = async (
  loginData: ILoginData
): Promise<ILoginSuccesResponse> => {
  try {
    const res = await request.post('/users/login', loginData)
    const { data }: { data: ILoginSuccesResponse } = res
    return data
  } catch (error) {
    return error
  }
}

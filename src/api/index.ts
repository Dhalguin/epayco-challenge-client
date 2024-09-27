import axios from 'axios'
import { ApiResponse } from './types'

axios.defaults.baseURL = 'http://localhost:3601/'

const checkBalance = async <T>(document: number, phoneNumber: string): Promise<ApiResponse<T> | null> => {
  try {
    const response = await axios.get(`/${document}?celular=${phoneNumber}`)
    const data = { data: response.data.data, status: response.status }
    return data
  } catch (err) {
    return null
  }
}

export const api = { checkBalance }

import axios from 'axios'
import { ApiResponse, RegisterClientPayload } from './types'

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

const registerClient = async <T>(payload: RegisterClientPayload): Promise<ApiResponse<T> | null> => {
  try {
    const response = await axios.post(`/`, payload)
    const data = { data: response.data.data, status: response.status }
    return data
  } catch (err) {
    return null
  }
}

export const api = { checkBalance, registerClient }

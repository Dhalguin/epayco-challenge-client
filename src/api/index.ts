import axios from 'axios'
import {
  ApiResponse,
  ConfirmPaymentPayload,
  PaymentPayload,
  RechargeWalletPayload,
  RegisterClientPayload,
} from './types'

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

const rechargeWallet = async <T>(payload: RechargeWalletPayload): Promise<ApiResponse<T> | null> => {
  try {
    const response = await axios.put(`/recharge`, payload)
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

const payment = async <T>(payload: PaymentPayload): Promise<ApiResponse<T> | null> => {
  try {
    const response = await axios.post(`/payment/generate`, payload)
    const data = { data: response.data.data, status: response.status }
    return data
  } catch (err) {
    return null
  }
}

const confirmPayment = async <T>(payload: ConfirmPaymentPayload): Promise<ApiResponse<T> | null> => {
  try {
    const response = await axios.put(`/payment/confirm`, payload)
    const data = { data: response.data.data, status: response.status }
    return data
  } catch (err) {
    return null
  }
}

export const api = { checkBalance, confirmPayment, payment, rechargeWallet, registerClient }

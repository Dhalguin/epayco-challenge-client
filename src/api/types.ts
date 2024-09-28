export type ApiResponse<T> = {
  data: T
  status: number
}

export type Client = {
  _id: string
  documento: 87654321
  nombres: string
  email: string
  celular: string
  valor: number
}

export type SessionId = {
  sessionId: string
}

// Payloads

export type RegisterClientPayload = {
  documento: string
  nombres: string
  email: string
  celular: string
}

export type RechargeWalletPayload = {
  documento: number
  celular: string
  valor: number
}

export type PaymentPayload = {
  documento: number
  celular: string
}

export type ConfirmPaymentPayload = {
  clientId: string
  token: number
  sessionId: string
  monto: number
}

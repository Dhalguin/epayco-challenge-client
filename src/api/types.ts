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

export type Token = {
  sessionId: string
  token: number
}

// Payloads

export type RegisterClientPayload = {
  documento: string
  nombres: string
  email: string
  celular: string
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

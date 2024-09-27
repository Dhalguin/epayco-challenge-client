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

export type RegisterClientPayload = {
  documento: string
  nombres: string
  email: string
  celular: string
}

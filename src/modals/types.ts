export type RechargeWalletModalProps = {
  visible: boolean
  title: string
  onClose: () => void
  setRechargeWalletAmount: React.Dispatch<React.SetStateAction<number>>
  onRecharge: () => void
}

export type PaymentModalProps = {
  visible: boolean
  title: string
  onClose: () => void
  setPaymentAmount: React.Dispatch<React.SetStateAction<number>>
  onPayment: () => void
}

export type ConfirmPaymentModalProps = {
  visible: boolean
  title: string
  onClose: () => void
  setToken: React.Dispatch<React.SetStateAction<number>>
  onConfirmPayment: () => void
}

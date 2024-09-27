export type RechargeWalletModalProps = {
  visible: boolean
  title: string
  onClose: () => void
  setRechargeWalletAmount: React.Dispatch<React.SetStateAction<number>>
  onRecharge: () => void
}

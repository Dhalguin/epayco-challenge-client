import { Modal } from '../../components'
import { RechargeWalletModalProps } from '../types'

const RechargeWalletModal: React.FC<RechargeWalletModalProps> = ({
  visible,
  title,
  onClose,
  setRechargeWalletAmount,
  onRecharge,
}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      description="A continuación, ingrese el monto que desea recargar a su billeterera virtual"
      onClose={onClose}>
      <div className="flex flex-col justify-center items-center h-full gap-4 w-full">
        <input
          type="number"
          className="border-2 border-solid w-full px-2 py-2 rounded-md"
          placeholder="0.00"
          onChange={ev => setRechargeWalletAmount(Number(ev.target.value))}
        />
        <button className="btn btn-primary" onClick={() => onRecharge()}>
          Recargar
        </button>
      </div>
    </Modal>
  )
}

export default RechargeWalletModal
